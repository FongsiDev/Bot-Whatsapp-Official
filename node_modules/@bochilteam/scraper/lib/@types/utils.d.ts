export declare class ScraperError extends Error {
    readonly date: Date;
    constructor(message: any, options?: {});
    static createError(message: any, options?: {}): ScraperError;
    static createErrorArgs(message: any, options?: {}): ScraperError;
}
export declare function getEncodedSnapApp(data: string): string[];
export declare function decodeSnapApp(...args: string[] | number[]): string;
export declare function getDecodedSnapSave(data: string): string;
export declare function decryptSnapSave(data: string): string;
type JsonRenderedSnapSave = {
    status: number;
    data: {
        identifier: string;
        progress: number;
        file_size: number;
        file_path: string;
    };
};
type RenderedSnapSave = Omit<JsonRenderedSnapSave['data'], 'identifier' | 'progress'>;
export declare function getRenderedSnapSaveUrl(url: string): Promise<RenderedSnapSave>;
export declare function stringifyCookies(cookies: string[]): string;
export declare function parseCookies(cookieString: string): {
    [key: string]: string;
};
/**
 * @returns is a kilobit
 */
export declare function parseFileSize(size: string): number;
export {};
//# sourceMappingURL=utils.d.ts.map