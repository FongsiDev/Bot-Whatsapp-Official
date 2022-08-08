/// <reference types="node" />
export declare class Pixiv {
    private cookies;
    private agent;
    login(username: string, password: string, headless?: boolean): Promise<boolean>;
    staticLogin(cookies: string, useragent: string): void;
    getLogin(): {
        cookies: string;
        agent: string;
    };
    isLoged(): boolean;
    logout(): Promise<void>;
    getIllustsByTag(tag: string, options?: {
        mode?: "all" | "r18" | "safe";
        page?: number;
    }): Promise<Array<Artwork>>;
    getIllustByID(id: string): Promise<Illust>;
    getIllustByArtwork(artwork: Artwork): Promise<Illust>;
    getIllustsByUserID(id: string, options?: {
        limit?: number;
    }): Promise<Array<Artwork>>;
    getIllustsByUser(user: User): Promise<Array<Artwork>>;
    predict(tag: string): Promise<Array<TAG>>;
    download(url: URL): Promise<Buffer>;
    private fetch;
}
export interface Artwork {
    id: string;
    title: string;
    illustType: number;
    description: string;
    tags: Array<string>;
    userId: string;
    userName: string;
    width: number;
    height: number;
    pageCount: number;
    createDate: string;
    updateDate: string;
}
export interface Illust {
    pageCount: number;
    urls: Array<Image>;
    illustID: string;
    illustType: number;
    description: string;
    tags: Array<string>;
    createDate: string;
    uploadDate: string;
    width: number;
    height: number;
    like: number;
    bookmark: number;
    view: number;
    comment: number;
    user: User;
    title: string;
}
export interface User {
    id: string;
    name: string;
    avatar: string;
    premium: boolean;
    backgound: string;
    partial: number;
}
export interface Image {
    mini: string;
    thumb: string;
    small: string;
    regular: string;
    original: string;
}
export interface TAG {
    tag_name: string;
    access_count: string;
    type: string;
    tag_translation: string;
}
