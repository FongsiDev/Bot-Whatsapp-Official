"use strict";
// import { z } from 'zod'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFileSize = exports.parseCookies = exports.stringifyCookies = exports.getRenderedSnapSaveUrl = exports.decryptSnapSave = exports.getDecodedSnapSave = exports.decodeSnapApp = exports.getEncodedSnapApp = exports.ScraperError = void 0;
const got_1 = __importDefault(require("got"));
class ScraperError extends Error {
    constructor(message, options) {
        super(message);
        this.name = 'ScraperError';
        this.date = new Date();
        this.message =
            message +
                '\n\nIf this is bug pls report to https://github.com/BochilTeam/scraper';
    }
    static createError(message, options) {
        return new ScraperError(message, options);
    }
    static createErrorArgs(message, options) {
        return new ScraperError('Invalid input args: ' + message, options);
    }
}
exports.ScraperError = ScraperError;
function getEncodedSnapApp(data) {
    return data.split('decodeURIComponent(escape(r))}(')[1]
        .split('))</script>')[0]
        .split(',')
        .map(v => v.replace(/"/g, '').trim());
}
exports.getEncodedSnapApp = getEncodedSnapApp;
function decodeSnapApp(...args) {
    // From reponse snap app
    function _0xe78c(d, e, f) {
        const g = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');
        const h = g.slice(0, e);
        const i = g.slice(0, f);
        // @ts-ignore
        // eslint-disable-next-line array-callback-return
        let j = d.split('').reverse().reduce(function (a, b, c) {
            // eslint-disable-next-line no-return-assign
            if (h.indexOf(b) !== -1)
                return a += h.indexOf(b) * (Math.pow(e, c));
        }, 0);
        let k = '';
        while (j > 0) {
            k = i[j % f] + k;
            j = (j - (j % f)) / f;
        }
        return k || '0';
    }
    function _0xc60e(h, u, n, t, e, r) {
        r = '';
        for (let i = 0, len = h.length; i < len; i++) {
            let s = '';
            while (h[i] !== n[e]) {
                s += h[i];
                i++;
            }
            for (let j = 0; j < n.length; j++) {
                s = s.replace(new RegExp(n[j], 'g'), j.toString());
            }
            // @ts-ignore
            r += String.fromCharCode((_0xe78c(s, e, 10) - t));
        }
        return decodeURIComponent(encodeURIComponent(r));
    }
    // @ts-ignore
    return _0xc60e(...args);
}
exports.decodeSnapApp = decodeSnapApp;
function getDecodedSnapSave(data) {
    return data.split('"download-section").innerHTML = "')[1]
        .split('"; parent.document.getElementById("inputData").remove();')[0]
        .replace(/\\(\\)?/g, '');
}
exports.getDecodedSnapSave = getDecodedSnapSave;
function decryptSnapSave(data) {
    return getDecodedSnapSave(decodeSnapApp(...getEncodedSnapApp(data)));
}
exports.decryptSnapSave = decryptSnapSave;
async function getRenderedSnapSaveUrl(url) {
    while (true) {
        const json = await (0, got_1.default)(url).json();
        if (json.status !== 1)
            throw new ScraperError(json.data.identifier);
        if (json.data.progress === 100) {
            return {
                file_size: json.data.file_size,
                file_path: json.data.file_path
            };
        }
    }
}
exports.getRenderedSnapSaveUrl = getRenderedSnapSaveUrl;
function stringifyCookies(cookies) {
    return cookies.map(cookie => {
        const [name, _value] = cookie.split('=');
        const [value] = _value.split(';');
        return `${name}=${value}`;
    }).join('; ');
}
exports.stringifyCookies = stringifyCookies;
function parseCookies(cookieString) {
    const cookies = {};
    cookieString.split(';').forEach(cookie => {
        const [key, value] = cookie.split('=');
        cookies[key.trim()] = value.trim();
    });
    return cookies;
}
exports.parseCookies = parseCookies;
/**
 * @returns is a kilobit
 */
function parseFileSize(size) {
    return parseFloat(size) * (/GB/i.test(size)
        ? 1000000
        : /MB/i.test(size)
            ? 1000
            : /KB/i.test(size)
                ? 1
                : /bytes?/i.test(size)
                    ? 0.001
                    : /B/i.test(size)
                        ? 0.1
                        : 0);
}
exports.parseFileSize = parseFileSize;
// // https://github.com/microsoft/TypeScript/issues/13298#issuecomment-885980381
// type UnionToIntersection<U> = (
//   U extends never ? never : (arg: U) => never
// ) extends (arg: infer I) => void
//   ? I
//   : never;
// type UnionToTuple<T> = UnionToIntersection<
//   T extends never ? never : (t: T) => T
// > extends (_: never) => infer W
//   ? [...UnionToTuple<Exclude<T, W>>, W]
//   : [];
// export function zodObjectToZodTuples<T extends ReturnType<typeof z.object>> (obj: T): z.ZodTuple<UnionToTuple<T['_shape'][keyof T['_shape']]>> {
// }
//# sourceMappingURL=utils.js.map