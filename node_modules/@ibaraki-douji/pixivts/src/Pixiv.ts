import fetch, {Response} from 'node-fetch';
import { parse } from 'node-html-parser';


export class Pixiv {

    private cookies: string = "";
    private agent: string = "";

    public async login(username: string, password: string, headless: boolean = false): Promise<boolean> {
        let browser = await require("puppeteer").launch({
            headless: headless
        });

        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(0);
        page.setDefaultTimeout(0);
        await page.goto("https://accounts.pixiv.net/login?return_to=https%3A%2F%2Fwww.pixiv.net%2Fen%2F&lang=en&source=pc&view_type=page", {waitUntil: "networkidle2"});

        const log = await page.$("#container-login input[type='text']");
        const pass = await page.$("#container-login input[type='password']");
        const sub = await page.$("#container-login button");

        await log.type(username, {delay: 50});
        await pass.type(password, {delay: 50});
        await sub.click({delay: 100});

        await page.waitForNavigation({waitUntil: "domcontentloaded"});
        this.cookies = "";
        for (let c of await page.cookies()) {
            this.cookies += c.name + "=" + c.value + "; ";
        }
        this.agent = await browser.userAgent();

        this.cookies = this.cookies.substring(0, this.cookies.length-2);
        page.close();
        browser.close();

        return true;
    }

    public staticLogin(cookies: string, useragent: string) {
        this.cookies = cookies,
        this.agent = useragent;
    }

    public getLogin(): {cookies: string, agent: string} {
        return {
            cookies: this.cookies,
            agent: this.agent
        }
    }

    public isLoged() {
        return this.cookies != "" && this.agent != "";
    }

    public async logout() {
        this.cookies = "";
        this.agent = "";
    }

    public async getIllustsByTag(tag: string, options: {mode?: "all" | "r18" | "safe", page?: number} = {mode: "safe", page: 1}): Promise<Array<Artwork>> {
        const res = await this.fetch(new URL("https://www.pixiv.net/ajax/search/artworks/" + tag + "?word=" + tag + "&order=date_d&mode=" + options.mode + "&p=" + options.page + "&s_mode=s_tag_full&type=all&lang=en"))
        const json = JSON.parse(await res.text());

        let arr = [];

        arr = arr.concat(json.body.illustManga.data)

        return arr;
    }

    public async getIllustByID(id: string): Promise<Illust> {
        const res = await this.fetch(new URL("https://www.pixiv.net/en/artworks/" + id));
        const html = parse(await res.text());
        const parser = html.querySelector("#meta-preload-data");

        const i = JSON.parse(parser.getAttribute("content")).illust[id];
        const u = JSON.parse(parser.getAttribute("content")).user[i.userId];

        const arr: Array<Image> = [];

        for (let a = 0; a < i.pageCount; a++) {
            arr.push({
                mini: i.urls.mini.replace("p0", "p" + a),
                original: i.urls.original.replace("p0", "p" + a),
                regular: i.urls.regular.replace("p0", "p" + a),
                small: i.urls.small.replace("p0", "p" + a),
                thumb: i.urls.thumb.replace("p0", "p" + a),
            });
        }

        const illust: Illust = {
            bookmark: i.bookmarkCount,
            comment: i.commentCount,
            createDate: i.createDate,
            uploadDate: i.uploadDate,
            description: i.description,
            height: i.height,
            illustID: i.illustId,
            illustType: i.illustType,
            like: i.likeCount,
            pageCount: i.pageCount,
            tags: i.tags,
            view: i.viewCount,
            width: i.width,
            user: {
                avatar: u.image,
                backgound: u.backgound,
                id: u.userId,
                name: u.name,
                partial: u.partial,
                premium: u.premium
            },
            urls: arr,
            title: i.title
        };

        return illust;
    }

    public async getIllustByArtwork(artwork: Artwork): Promise<Illust> {
        return this.getIllustByID(artwork.id);
    }

    public async getIllustsByUserID(id: string, options: {limit?: number} = {limit: 100}): Promise<Array<Artwork>> {
        let res = await this.fetch(new URL("https://www.pixiv.net/ajax/user/" + id + "/profile/all?lang=en"));
        let json = JSON.parse(await res.text());
        const arr = [];

        if (options.limit == 0) options.limit = Number.MAX_VALUE;

        let i = 1;
        for (let ID of Object.keys(json.body.illusts)) {
            if (i > options.limit) break;
            arr.push(await this.getIllustByID(ID));
            i++;
        }

        return arr;
    }

    public async getIllustsByUser(user: User): Promise<Array<Artwork>> {
        return this.getIllustsByUserID(user.id);
    }

    public async predict(tag: string): Promise<Array<TAG>> {
        const res = await this.fetch(new URL("https://www.pixiv.net/rpc/cps.php?keyword=" + tag + "&lang=en"));
        const json = JSON.parse(await res.text());

        return json.candidates;
    }

    public async download(url: URL): Promise<Buffer> {
        return new Promise<Buffer>(resolve => {
            resolve(this.fetch(url)
            .then(res => res.arrayBuffer())
            .then(buff => Buffer.from(buff)));
        });
    }

    private async fetch(url: URL): Promise<Response> {
        return new Promise<Response>(async (resolve) => {
            resolve(fetch(url.toString(), {
                headers: {
                  'Referer': 'https://www.pixiv.net/',
                  'User-Agent': (this.agent != "" ? (this.agent) : 'Cloudflare Workers'),
                  'cookie': ((this.cookies != "" && this.agent != "") ? this.cookies : undefined)
                }
            }))
        });
    }
}

export interface Artwork {
    id: string,
    title: string,
    illustType: number,
    description: string,
    tags: Array<string>,
    userId: string,
    userName: string,
    width: number,
    height: number,
    pageCount: number,
    createDate: string,
    updateDate: string,
}

export interface Illust {
    pageCount: number,
    urls: Array<Image>,
    illustID: string,
    illustType: number,
    description: string,
    tags: Array<string>,
    createDate: string,
    uploadDate: string,
    width: number,
    height: number,
    like: number,
    bookmark: number,
    view: number,
    comment: number,
    user: User,
    title: string,
}

export interface User {
    id: string,
    name: string,
    avatar: string,
    premium: boolean,
    backgound: string,
    partial: number,
}

export interface Image {
    mini: string,
    thumb: string,
    small: string,
    regular: string,
    original: string,
}

export interface TAG {
    tag_name: string,
    access_count: string,
    type: string,
    tag_translation: string
}