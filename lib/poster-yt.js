import rss from "rss-converter";
import fs from "fs";
import { watchFile, unwatchFile } from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";
import db from "../lib/database.js";

"use strict";
const merge2Obj = (one, two) => {
    for (const key in two) {
        if (Object.prototype.hasOwnProperty.call(two, key)) {
            const ele = two[key];
            if (typeof ele === "object")
                one[key] = merge2Obj(one[key], ele);
            else
                one[key] = ele;
        }
    }
    return one;
};
const mergeObj = (res, ...objs) => {
    objs.forEach((obj) => merge2Obj(res, obj));
    return res;
};


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new(P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

import axios_1 from "axios";
/**
 * Get full information about a YouTube channel
 */
const channelInfo = (url, options = {}) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33;
    if (typeof url !== "string")
        throw new Error(`Expected "url" to be "string" but received "${typeof url}".`);
    if (typeof options !== "object")
        throw new Error(`Expected "options" to be "object" but received "${typeof options}".`);
    options = mergeObj({
        requestOptions: {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0",
            },
        },
    }, options);
    if (!url.startsWith("http"))
        url = `https://www.youtube.com/channel/${url}`;
    let res;
    try {
        res = (yield axios_1.default.get(url, Object.assign(Object.assign({}, options.requestOptions), {
            responseType: "text"
        }))).data;
    } catch (err) {
        throw new Error(`Failed to fetch site. (${err})`);
    }
    let initialData;
    try {
        initialData = JSON.parse((_a = res.split("var ytInitialData = ")[1]) === null || _a === void 0 ? void 0 : _a.split(";</script>")[0]);
    } catch (err) {
        throw new Error(`Failed to parse data from script tag. (${err})`);
    }
    const channel = {
        name: initialData &&
            initialData.metadata &&
            initialData.metadata.channelMetadataRenderer ?
            initialData.metadata.channelMetadataRenderer.title : undefined,
        id: initialData &&
            initialData.metadata &&
            initialData.metadata.channelMetadataRenderer ?
            initialData.metadata.channelMetadataRenderer.externalId : undefined,
        url: initialData &&
            initialData.metadata &&
            initialData.metadata.channelMetadataRenderer ?
            initialData.metadata.channelMetadataRenderer.channelUrl : undefined,
        rssUrl: initialData &&
            initialData.metadata &&
            initialData.metadata.channelMetadataRenderer ?
            initialData.metadata.channelMetadataRenderer.rssUrl : undefined,
        description: initialData &&
            initialData.metadata &&
            initialData.metadata.channelMetadataRenderer ?
            initialData.metadata.channelMetadataRenderer.description : undefined,
        subscribers: initialData &&
            initialData.header &&
            initialData.header.c4TabbedHeaderRenderer &&
            initialData.header.c4TabbedHeaderRenderer.subscriberCountText ?
            initialData.header.c4TabbedHeaderRenderer.subscriberCountText.simpleText : undefined,
        banner: initialData &&
            initialData.header &&
            initialData.header.c4TabbedHeaderRenderer &&
            initialData.header.c4TabbedHeaderRenderer.banner &&
            initialData.header.c4TabbedHeaderRenderer.banner.thumbnails ?
            initialData.header.c4TabbedHeaderRenderer.banner.thumbnails.sort((a, b) => b.width - a.width) : undefined,
        tvBanner: initialData &&
            initialData.header &&
            initialData.header.c4TabbedHeaderRenderer &&
            initialData.header.c4TabbedHeaderRenderer.tvBanner &&
            initialData.header.c4TabbedHeaderRenderer.tvBanner.thumbnails ?
            initialData.header.c4TabbedHeaderRenderer.tvBanner.thumbnails.sort((a, b) => b.width - a.width) : undefined,
        mobileBanner: initialData &&
            initialData.header &&
            initialData.header.c4TabbedHeaderRenderer &&
            initialData.header.c4TabbedHeaderRenderer.mobileBanner &&
            initialData.header.c4TabbedHeaderRenderer.mobileBanner.thumbnails ?
            initialData.header.c4TabbedHeaderRenderer.mobileBanner.thumbnails.sort((a, b) => b.width - a.width) : undefined,
        tags: initialData &&
            initialData.metadata &&
            initialData.metadata.channelMetadataRenderer ?
            initialData.metadata.channelMetadataRenderer.keywords.split(" ") : undefined,
        unlisted: initialData &&
            initialData.microformat &&
            initialData.microformat.microformatDataRenderer ?
            initialData.microformat.microformatDataRenderer.unlisted : undefined,
        familySafe: initialData &&
            initialData.metadata &&
            initialData.metadata.channelMetadataRenderer ?
            initialData.metadata.channelMetadataRenderer.isFamilySafe : undefined,
    };
    return channel;
});

async function isValidURL(url) {
  return (
    url.match(
      /^https?:\/\/(www\.)?youtube\.com\/(channel\/UC[\w-]{21}[AQgw]|(c\/|user\/)?[\w-]+)$/
    ) != null
  );
}

async function youtube_poster(channel) {
  try {
    if(channel == undefined || channel == "undefined") return false;
    let feed = await rss.toJson(
      "https://www.youtube.com/feeds/videos.xml?channel_id=" + channel
    );
    console.log(await feed.items[0])
    let jsonOpen = fs.readFileSync("links.json");
    let json = JSON.parse(jsonOpen);
    if (jsonOpen.includes(feed.items[0].yt_videoId)) return false;
    json.push(feed.items[0].yt_videoId);
    let jsonLink = JSON.stringify(json);
    fs.writeFileSync("links.json", jsonLink);
    return feed.items[0];
  } catch (E) {return false}
}

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'yt-poster.js'"));
  import(`${file}?update=${Date.now()}`);
});
export { channelInfo, isValidURL, youtube_poster }