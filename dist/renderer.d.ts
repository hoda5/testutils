/// <reference types="react" />
import * as TestRenderer from "react-test-renderer";
export declare function renderer(e: React.ReactElement<any>): {
    res: TestRenderer.ReactTestRenderer;
    root: TestRenderer.ReactTestInstance;
    search(text: string | RegExp): boolean;
};
