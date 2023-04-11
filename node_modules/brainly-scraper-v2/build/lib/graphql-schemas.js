"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchGraphQLSchemas = exports.actionGraphQLSchemas = void 0;
const axios_1 = __importDefault(require("axios"));
const path_1 = require("path");
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
const os_1 = require("os");
const statCall = (path, condition) => (0, promises_1.stat)(path)
    .then((stat) => (condition ? condition(stat) : true))
    .catch(() => false);
const actionGraphQLSchemas = async (action, contentStream) => {
    const brainlyScraperDir = (0, path_1.resolve)((0, os_1.homedir)(), '.brainlyscraper2');
    if (!(await statCall(brainlyScraperDir, (stat) => stat.isDirectory()))) {
        await (0, promises_1.mkdir)(brainlyScraperDir, { recursive: true });
    }
    switch (action) {
        case 'read':
            if (!(await statCall((0, path_1.resolve)(brainlyScraperDir, 'schemas.gql'), (stat) => stat.isFile()))) {
                throw new Error("Couldn't find schemas.gql");
            }
            return (0, promises_1.readFile)((0, path_1.resolve)(brainlyScraperDir, 'schemas.gql'), {
                encoding: 'utf8',
            });
        case 'write':
            const file = (0, fs_1.createWriteStream)((0, path_1.resolve)(brainlyScraperDir, 'schemas.gql'));
            contentStream?.pipe(file);
            break;
    }
    return;
};
exports.actionGraphQLSchemas = actionGraphQLSchemas;
const fetchGraphQLSchemas = async () => {
    const responseStream = await axios_1.default.get('https://github.com/hanifdwyputras/brainly-scraper-v2/' +
        'raw/develop/assets/schemas.graphql', {
        responseType: 'stream',
    });
    await (0, exports.actionGraphQLSchemas)('write', responseStream.data);
    return Date.now();
};
exports.fetchGraphQLSchemas = fetchGraphQLSchemas;
