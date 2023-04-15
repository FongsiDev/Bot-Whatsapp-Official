import type { AxiosRequestConfig } from 'axios';
import { CountryList, LanguageList, Answer, Question, Author } from '..';
export declare function search({ c, language, question, length, options, }: {
    c: CountryList;
    language: LanguageList;
    question: string;
    length: number;
    options?: AxiosRequestConfig;
}): Promise<{
    question: Question;
    answers: Answer[];
}[] | {
    err: string;
}>;
export declare function findUser({ country, language, userId, options, }: {
    country: CountryList;
    language: LanguageList;
    userId: number | string;
    options?: AxiosRequestConfig;
}): Promise<Author | {
    err: string;
} | undefined>;
export declare function searchQuestionById({ id, language, country, options, }: {
    id: string;
    language: LanguageList;
    country: CountryList;
    options: AxiosRequestConfig;
}): Promise<{
    err: string;
    question?: undefined;
    answers?: undefined;
} | {
    question: Question;
    answers: Answer[];
    err?: undefined;
}>;
