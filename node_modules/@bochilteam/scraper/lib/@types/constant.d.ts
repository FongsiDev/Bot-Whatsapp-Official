import { z } from 'zod';
type params = Parameters<typeof z.string>[0];
type ErrorArgs = {
    [key: string]: params;
};
export declare const ERROR_ARGS: ErrorArgs;
export {};
//# sourceMappingURL=constant.d.ts.map