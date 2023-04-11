import { AxiosRequestConfig, AxiosInstance } from 'axios';
import { Answer, Author, CountryList, LanguageList, Question } from './types';
import { Cache } from './cache';
export declare class Brainly {
    #private;
    country: CountryList;
    private enabledCache;
    private worker;
    cache: Cache;
    constructor(country?: CountryList, enabledCache?: boolean, useZadaneCookie?: boolean);
    search(question: string, language?: LanguageList, length?: number, options?: AxiosRequestConfig): Promise<{
        question: Question;
        answers: Answer[];
    }[]>;
    searchById(id: number | string, language?: LanguageList, options?: AxiosRequestConfig): Promise<{
        question: Question;
        answers: Answer[];
    } | undefined>;
    static getRequestParams(query: string, vars: Record<string, unknown>): Promise<{
        operationName: string;
        query: string | undefined;
        variables: Record<string, unknown>;
    }[]>;
    static isValidLanguage(lang: LanguageList): boolean;
    static getBaseURL(country: CountryList): string;
    findUserById(country: CountryList, userId: number | string, options?: AxiosRequestConfig): Promise<Author | undefined>;
    searchWithMT(question: string, language?: LanguageList, length?: number, options?: AxiosRequestConfig): Promise<{
        question: Question;
        answers: Answer[];
    }[]>;
    static client(country: CountryList): AxiosInstance;
    static initialize(): Promise<number>;
}
