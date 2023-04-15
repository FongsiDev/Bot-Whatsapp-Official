import type { Answer, Author, Comment, LanguageList, OriginalAnswer, OriginalAuthor, OriginalComment, OriginalQuestion, OriginalQuestionAndSimilar, Question, WorkType } from './types';
export default class Util {
    static parseId(id: string): [string, number];
    static convertId(id: (string | number)[] | string | number, type?: string): string;
    static clearContent(text: string): string;
    static resolveWorkName(lang: LanguageList): WorkType;
    static convertAuthor(author: OriginalAuthor): Author;
    static convertComment(comment: OriginalComment): Comment;
    static convertAnswer(answer: OriginalAnswer): Answer;
    static convertQuestion(question: OriginalQuestionAndSimilar | OriginalQuestion): Question;
    static generateZadaneCookieGuest(): string;
}
