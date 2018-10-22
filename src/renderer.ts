import * as TestRenderer from "react-test-renderer"

export function renderer(
    e: React.ReactElement<any>) {
    const res = TestRenderer.create(e)
    return {
        res,
        root: res.root,
        search(text: string | RegExp) {
            return pesq(res.root)
            function pesq(n: TestRenderer.ReactTestInstance): boolean {
                return n.children.some((i) => {
                    if (typeof i === "string") return test(i)
                    return pesq(i)
                })
            }
            function test(s: string) {
                if (typeof text === "string") return s.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) >= 0
                return text.test(s)
            }
        },
    }
}
