export declare function callbackWaiter<T>(nodeMode?: boolean): {
    callback: (...args: any[]) => void;
    waitCallback(): Promise<T>;
};
