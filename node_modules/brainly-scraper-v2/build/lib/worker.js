"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchQuestionById = exports.findUser = exports.search = void 0;
const piscina_1 = __importDefault(require("piscina"));
const __1 = require("..");
const util_1 = __importDefault(require("./util"));
async function search({ c, language, question, length = 10, options, }) {
    if (!piscina_1.default.isWorkerThread) {
        throw new Error("You're not able to use this command");
    }
    try {
        if (!__1.Brainly.isValidLanguage(language)) {
            return {
                err: 'INVALID_LANGUAGE',
            };
        }
        const body = await __1.Brainly.getRequestParams('SearchQuery', {
            query: question,
            len: length,
        });
        const response = await __1.Brainly.client(c).post(`graphql/${language.toLowerCase()}`, body, options);
        const json = response.data;
        const validJSON = json[0].data.questionSearch.edges;
        const objects = validJSON.map((obj) => {
            const question = util_1.default.convertQuestion(obj.node);
            const answers = obj.node.answers?.nodes?.map((answerObj) => util_1.default.convertAnswer(answerObj)) || [];
            return {
                question,
                answers,
            };
        });
        return objects;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
exports.search = search;
async function findUser({ country, language, userId, options, }) {
    if (!piscina_1.default.isWorkerThread) {
        throw new Error("You're not able to use this command");
    }
    try {
        if (!__1.Brainly.isValidLanguage(language)) {
            return {
                err: 'INVALID_LANGUAGE',
            };
        }
        const body = await __1.Brainly.getRequestParams('FindUserById', {
            userid: userId,
        });
        const response = await __1.Brainly.client(country).post(`graphql/${language.toLowerCase()}`, body, options);
        if (response.status !== 200) {
            return {
                err: 'Response fails',
            };
        }
        const json = response.data;
        if (typeof json !== 'object' || !json.data.user) {
            return {
                err: 'Response fails',
            };
        }
        return util_1.default.convertAuthor(json.data.user);
    }
    catch (err) {
        throw new Error(err.message);
    }
}
exports.findUser = findUser;
async function searchQuestionById({ id, language = 'id', country, options, }) {
    if (!piscina_1.default.isWorkerThread) {
        throw new Error("You're not able to use this command");
    }
    try {
        if (!__1.Brainly.isValidLanguage(language)) {
            return {
                err: 'INVALID_LANGUAGE',
            };
        }
        const body = await __1.Brainly.getRequestParams('FindQuestionById', {
            id,
        });
        const response = await __1.Brainly.client(country).post(`graphql/${language.toLowerCase()}`, body, options);
        const json = response.data;
        const validJSON = json[0].data.question;
        const question = util_1.default.convertQuestion(validJSON);
        const answers = validJSON?.answers?.nodes?.map((answerObj) => util_1.default.convertAnswer(answerObj)) || [];
        return { question, answers };
    }
    catch (err) {
        throw new Error(err.message);
    }
}
exports.searchQuestionById = searchQuestionById;
