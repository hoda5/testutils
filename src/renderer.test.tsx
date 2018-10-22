import * as React from "react"
import { renderer } from "./testutils"

describe("renderer", () => {
    it("search string", () => {
        const r = renderer(<span>str</span>)
        expect(r.search("str")).toBeTruthy()
    })

    it("search regext", () => {
        const r = renderer(<div><span>string</span></div>)
        expect(r.search(/Str/gi)).toBeTruthy()
    })

})
