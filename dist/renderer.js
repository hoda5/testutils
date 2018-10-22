import * as TestRenderer from "react-test-renderer";
export function renderer(e) {
    var res = TestRenderer.create(e);
    return {
        res: res,
        root: res.root,
        search: function (text) {
            return pesq(res.root);
            function pesq(n) {
                return n.children.some(function (i) {
                    if (typeof i === "string")
                        return test(i);
                    return pesq(i);
                });
            }
            function test(s) {
                if (typeof text === "string")
                    return s.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) >= 0;
                return text.test(s);
            }
        },
    };
}
//# sourceMappingURL=renderer.js.map