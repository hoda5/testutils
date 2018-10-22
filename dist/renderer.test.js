import * as React from "react";
import { renderer } from "./testutils";
describe("renderer", function () {
    it("search string", function () {
        var r = renderer(React.createElement("span", null, "str"));
        expect(r.search("str")).toBeTruthy();
    });
    it("search regext", function () {
        var r = renderer(React.createElement("div", null,
            React.createElement("span", null, "string")));
        expect(r.search(/Str/gi)).toBeTruthy();
    });
});
//# sourceMappingURL=renderer.test.js.map