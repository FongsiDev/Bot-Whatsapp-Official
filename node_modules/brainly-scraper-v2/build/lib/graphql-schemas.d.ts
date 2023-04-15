import { type Readable } from 'stream';
export declare const actionGraphQLSchemas: (action: 'write' | 'read', contentStream?: Readable) => Promise<string | undefined>;
export declare const fetchGraphQLSchemas: () => Promise<number>;
