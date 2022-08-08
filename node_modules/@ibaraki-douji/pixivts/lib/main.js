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
var fs_1 = require("fs");
var Pixiv_1 = require("./Pixiv");
var pixiv = new Pixiv_1.Pixiv();
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var folder, page, tag, artworks, _loop_1, _i, artworks_1, art;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //await pixiv.login("email/ID", "password");
                pixiv.staticLogin('YOUR Cookies', "A Real browser Agent");
                folder = "D:/Images/.PIXIV/Ibaraki/";
                page = 1;
                tag = "茨木童子(Fate)";
                return [4 /*yield*/, pixiv.getIllustsByTag(tag, { mode: "safe", page: page })];
            case 1:
                artworks = (_a.sent());
                _a.label = 2;
            case 2:
                if (!(artworks.length > 0)) return [3 /*break*/, 8];
                console.log("PAGE " + page);
                _loop_1 = function (art) {
                    var illust_1, e_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                console.log("|-" + art.id);
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 4, , 5]);
                                return [4 /*yield*/, pixiv.getIllustByArtwork(art)];
                            case 2:
                                illust_1 = _b.sent();
                                if (illust_1.pageCount > 1) {
                                    fs_1.mkdirSync(folder + illust_1.illustID, { recursive: true });
                                }
                                return [4 /*yield*/, new Promise(function (resolve) {
                                        var r = 0;
                                        var _loop_2 = function (i) {
                                            console.log("|---|- Illust " + (+i + 1));
                                            pixiv.download(new URL(illust_1.urls[i].original)).then(function (buff) {
                                                fs_1.writeFileSync(folder + (illust_1.pageCount > 1 ? illust_1.illustID + "/" : "") + illust_1.illustID + "-" + i + ".jpg", buff);
                                                r++;
                                                if (r == illust_1.pageCount) {
                                                    console.log("|-" + page + "-|- DONE");
                                                    resolve();
                                                }
                                            })["catch"](console.log);
                                        };
                                        for (var i in illust_1.urls) {
                                            _loop_2(i);
                                        }
                                    })];
                            case 3:
                                _b.sent();
                                return [3 /*break*/, 5];
                            case 4:
                                e_1 = _b.sent();
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                };
                _i = 0, artworks_1 = artworks;
                _a.label = 3;
            case 3:
                if (!(_i < artworks_1.length)) return [3 /*break*/, 6];
                art = artworks_1[_i];
                return [5 /*yield**/, _loop_1(art)];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 3];
            case 6:
                page++;
                return [4 /*yield*/, pixiv.getIllustsByTag(tag, { mode: "safe", page: page })];
            case 7:
                artworks = (_a.sent());
                return [3 /*break*/, 2];
            case 8: return [2 /*return*/];
        }
    });
}); })();
