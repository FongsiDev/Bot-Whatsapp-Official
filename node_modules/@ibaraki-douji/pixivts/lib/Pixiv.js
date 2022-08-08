"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Pixiv = void 0;
var node_fetch_1 = require("node-fetch");
var node_html_parser_1 = require("node-html-parser");
var Pixiv = /** @class */ (function () {
    function Pixiv() {
        this.cookies = "";
        this.agent = "";
    }
    Pixiv.prototype.login = function (username, password, headless) {
        if (headless === void 0) { headless = false; }
        return __awaiter(this, void 0, void 0, function () {
            var browser, page, log, pass, sub, _i, _a, c, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, require("puppeteer").launch({
                            headless: headless
                        })];
                    case 1:
                        browser = _c.sent();
                        return [4 /*yield*/, browser.newPage()];
                    case 2:
                        page = _c.sent();
                        page.setDefaultNavigationTimeout(0);
                        page.setDefaultTimeout(0);
                        return [4 /*yield*/, page.goto("https://accounts.pixiv.net/login?return_to=https%3A%2F%2Fwww.pixiv.net%2Fen%2F&lang=en&source=pc&view_type=page", { waitUntil: "networkidle2" })];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, page.$("#container-login input[type='text']")];
                    case 4:
                        log = _c.sent();
                        return [4 /*yield*/, page.$("#container-login input[type='password']")];
                    case 5:
                        pass = _c.sent();
                        return [4 /*yield*/, page.$("#container-login button")];
                    case 6:
                        sub = _c.sent();
                        return [4 /*yield*/, log.type(username, { delay: 50 })];
                    case 7:
                        _c.sent();
                        return [4 /*yield*/, pass.type(password, { delay: 50 })];
                    case 8:
                        _c.sent();
                        return [4 /*yield*/, sub.click({ delay: 100 })];
                    case 9:
                        _c.sent();
                        return [4 /*yield*/, page.waitForNavigation({ waitUntil: "domcontentloaded" })];
                    case 10:
                        _c.sent();
                        this.cookies = "";
                        _i = 0;
                        return [4 /*yield*/, page.cookies()];
                    case 11:
                        _a = _c.sent();
                        _c.label = 12;
                    case 12:
                        if (!(_i < _a.length)) return [3 /*break*/, 14];
                        c = _a[_i];
                        this.cookies += c.name + "=" + c.value + "; ";
                        _c.label = 13;
                    case 13:
                        _i++;
                        return [3 /*break*/, 12];
                    case 14:
                        _b = this;
                        return [4 /*yield*/, browser.userAgent()];
                    case 15:
                        _b.agent = _c.sent();
                        this.cookies = this.cookies.substring(0, this.cookies.length - 2);
                        page.close();
                        browser.close();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    Pixiv.prototype.staticLogin = function (cookies, useragent) {
        this.cookies = cookies,
            this.agent = useragent;
    };
    Pixiv.prototype.getLogin = function () {
        return {
            cookies: this.cookies,
            agent: this.agent
        };
    };
    Pixiv.prototype.isLoged = function () {
        return this.cookies != "" && this.agent != "";
    };
    Pixiv.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.cookies = "";
                this.agent = "";
                return [2 /*return*/];
            });
        });
    };
    Pixiv.prototype.getIllustsByTag = function (tag, options) {
        if (options === void 0) { options = { mode: "safe", page: 1 }; }
        return __awaiter(this, void 0, void 0, function () {
            var res, json, _a, _b, arr;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.fetch(new URL("https://www.pixiv.net/ajax/search/artworks/" + tag + "?word=" + tag + "&order=date_d&mode=" + options.mode + "&p=" + options.page + "&s_mode=s_tag_full&type=all&lang=en"))];
                    case 1:
                        res = _c.sent();
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, res.text()];
                    case 2:
                        json = _b.apply(_a, [_c.sent()]);
                        arr = [];
                        arr = arr.concat(json.body.illustManga.data);
                        return [2 /*return*/, arr];
                }
            });
        });
    };
    Pixiv.prototype.getIllustByID = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var res, html, _a, parser, i, u, arr, a, illust;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fetch(new URL("https://www.pixiv.net/en/artworks/" + id))];
                    case 1:
                        res = _b.sent();
                        _a = node_html_parser_1.parse;
                        return [4 /*yield*/, res.text()];
                    case 2:
                        html = _a.apply(void 0, [_b.sent()]);
                        parser = html.querySelector("#meta-preload-data");
                        i = JSON.parse(parser.getAttribute("content")).illust[id];
                        u = JSON.parse(parser.getAttribute("content")).user[i.userId];
                        arr = [];
                        for (a = 0; a < i.pageCount; a++) {
                            arr.push({
                                mini: i.urls.mini.replace("p0", "p" + a),
                                original: i.urls.original.replace("p0", "p" + a),
                                regular: i.urls.regular.replace("p0", "p" + a),
                                small: i.urls.small.replace("p0", "p" + a),
                                thumb: i.urls.thumb.replace("p0", "p" + a)
                            });
                        }
                        illust = {
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
                        return [2 /*return*/, illust];
                }
            });
        });
    };
    Pixiv.prototype.getIllustByArtwork = function (artwork) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getIllustByID(artwork.id)];
            });
        });
    };
    Pixiv.prototype.getIllustsByUserID = function (id, options) {
        if (options === void 0) { options = { limit: 100 }; }
        return __awaiter(this, void 0, void 0, function () {
            var res, json, _a, _b, arr, i, _i, _c, ID, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.fetch(new URL("https://www.pixiv.net/ajax/user/" + id + "/profile/all?lang=en"))];
                    case 1:
                        res = _f.sent();
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, res.text()];
                    case 2:
                        json = _b.apply(_a, [_f.sent()]);
                        arr = [];
                        if (options.limit == 0)
                            options.limit = Number.MAX_VALUE;
                        i = 1;
                        _i = 0, _c = Object.keys(json.body.illusts);
                        _f.label = 3;
                    case 3:
                        if (!(_i < _c.length)) return [3 /*break*/, 6];
                        ID = _c[_i];
                        if (i > options.limit)
                            return [3 /*break*/, 6];
                        _e = (_d = arr).push;
                        return [4 /*yield*/, this.getIllustByID(ID)];
                    case 4:
                        _e.apply(_d, [_f.sent()]);
                        i++;
                        _f.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, arr];
                }
            });
        });
    };
    Pixiv.prototype.getIllustsByUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getIllustsByUserID(user.id)];
            });
        });
    };
    Pixiv.prototype.predict = function (tag) {
        return __awaiter(this, void 0, void 0, function () {
            var res, json, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.fetch(new URL("https://www.pixiv.net/rpc/cps.php?keyword=" + tag + "&lang=en"))];
                    case 1:
                        res = _c.sent();
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, res.text()];
                    case 2:
                        json = _b.apply(_a, [_c.sent()]);
                        return [2 /*return*/, json.candidates];
                }
            });
        });
    };
    Pixiv.prototype.download = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        resolve(_this.fetch(url)
                            .then(function (res) { return res.arrayBuffer(); })
                            .then(function (buff) { return Buffer.from(buff); }));
                    })];
            });
        });
    };
    Pixiv.prototype.fetch = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            resolve(node_fetch_1["default"](url.toString(), {
                                headers: {
                                    'Referer': 'https://www.pixiv.net/',
                                    'User-Agent': (this.agent != "" ? (this.agent) : 'Cloudflare Workers'),
                                    'cookie': ((this.cookies != "" && this.agent != "") ? this.cookies : undefined)
                                }
                            }));
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    return Pixiv;
}());
exports.Pixiv = Pixiv;
