"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brainly = void 0;
const piscina_1 = __importDefault(require("piscina"));
const path_1 = __importDefault(require("path"));
const config_1 = require("./config");
const fetcher_1 = require("./fetcher");
const cache_1 = require("./cache");
const util_1 = __importDefault(require("./util"));
const graphql_schemas_1 = require("./graphql-schemas");
class Brainly {
    country;
    enabledCache;
    worker = new piscina_1.default({
        filename: path_1.default.resolve(__dirname, 'worker.js'),
    });
    cache;
    #cookieZadane = '';
    constructor(country = 'id', enabledCache = true, useZadaneCookie = true) {
        this.country = country;
        this.enabledCache = enabledCache;
        if (!Brainly.isValidLanguage(country)) {
            throw new TypeError('Please put valid country!');
        }
        if (enabledCache) {
            this.cache = new cache_1.Cache();
        }
        if (useZadaneCookie) {
            this.#cookieZadane = util_1.default.generateZadaneCookieGuest();
        }
    }
    async search(question, language = 'id', length = 10, options = {}) {
        try {
            if (this.enabledCache &&
                this.cache.has(language, question.toLowerCase())) {
                return this.cache.get(language, question.toLowerCase());
            }
            options.headers ??= {
                Cookie: this.#cookieZadane,
            };
            const result = await this.worker.run({
                c: this.country.toLowerCase(),
                question: question,
                length: length,
                options: options,
                language: language,
            }, {
                name: 'search',
            });
            if (this.enabledCache)
                this.cache.set(language, question, result);
            return result;
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async searchById(id, language = 'id', options = {}) {
        try {
            if (this.enabledCache &&
                this.cache.has(language, id.toString().toLowerCase())) {
                return this.cache
                    .get(language, id.toString().toLowerCase())
                    ?.at(0);
            }
            options.headers ??= {
                Cookie: this.#cookieZadane,
            };
            return await new Promise(async (resolve) => {
                const result = await Promise.any(config_1.languages.map((country) => this.worker.run({
                    country: country,
                    language,
                    options,
                    id: isNaN(parseInt(id.toString(), 10))
                        ? id
                        : util_1.default.convertId(id, 'question'),
                }, { name: 'searchQuestionById' })));
                if (this.enabledCache)
                    this.cache.set(language, id.toString(), [result]);
                resolve(result);
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    static async getRequestParams(query, vars) {
        return [
            {
                operationName: query,
                query: await (0, config_1.getGraphqlQuery)(),
                variables: vars,
            },
        ];
    }
    static isValidLanguage(lang) {
        return (config_1.languages.includes(lang.toLowerCase()) && typeof lang === 'string');
    }
    static getBaseURL(country) {
        return config_1.baseURLs[country];
    }
    async findUserById(country, userId, options = {}) {
        return await new Promise(async (resolve) => {
            options.headers ??= {
                Cookie: this.#cookieZadane,
            };
            const result = await Promise.any(config_1.languages.map((country2) => this.worker.run({
                country: country2,
                language: country.toLowerCase(),
                userId: userId,
                options,
            }, {
                name: 'findUser',
            })));
            resolve(result);
        });
    }
    async searchWithMT(question, language = 'id', length = 10, options = {}) {
        if (this.enabledCache &&
            this.cache.has(language, question.toLowerCase())) {
            return this.cache.get(language, question.toLowerCase());
        }
        options.headers ??= {
            Cookie: this.#cookieZadane,
        };
        return await new Promise(async (resolve) => {
            const result = await Promise.any(config_1.languages.map((country) => this.worker.run({
                c: country,
                language,
                question,
                length,
                options,
            }, { name: 'search' })));
            if (this.enabledCache)
                this.cache.set(language, question, result);
            resolve(result);
        });
    }
    static client(country) {
        return (0, fetcher_1.fetcherClient)(Brainly.getBaseURL(country), {
            headers: {
                Origin: Brainly.getBaseURL(country),
                Referer: Brainly.getBaseURL(country),
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                TE: 'trailers',
            },
        });
    }
    static async initialize() {
        return (0, graphql_schemas_1.fetchGraphQLSchemas)();
    }
}
exports.Brainly = Brainly;
