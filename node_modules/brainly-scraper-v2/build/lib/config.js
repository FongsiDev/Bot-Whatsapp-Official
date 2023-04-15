"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languages = exports.getGraphqlQuery = exports.baseURLs = void 0;
const graphql_schemas_1 = require("./graphql-schemas");
exports.baseURLs = {
    id: 'https://brainly.co.id',
    us: 'https://brainly.com',
    es: 'https://brainly.lat',
    pt: 'https://brainly.com.br',
    ru: 'https://znanija.com',
    ro: 'https://brainly.ro',
    tr: 'https://eodev.com',
    ph: 'https://brainly.ph',
    pl: 'https://brainly.pl',
    hi: 'https://brainly.in',
    fr: 'https://nosdevoirs.fr',
};
const getGraphqlQuery = async () => {
    try {
        return (0, graphql_schemas_1.actionGraphQLSchemas)('read');
    }
    catch {
        throw new Error('Please initialize the brainly scraper query schemas!');
    }
};
exports.getGraphqlQuery = getGraphqlQuery;
exports.languages = Object.keys(exports.baseURLs);
