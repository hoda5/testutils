import "tslib"
import { callbackWaiter } from "./callbackWaiter"

describe("callbackWaiter", () => {
    it("waitCallback", async () => {
        const cb = callbackWaiter()
        setTimeout(() => cb.callback(5), 50)
        setTimeout(() => cb.callback(1), 10)
        setTimeout(() => cb.callback(3), 30)
        expect(await cb.waitCallback()).toBe(1)
        expect(await cb.waitCallback()).toBe(3)
        expect(await cb.waitCallback()).toBe(5)
    })
    it("waitCallback-multi args", async () => {
        const cb = callbackWaiter()
        setTimeout(() => cb.callback(5, 2), 50)
        setTimeout(() => cb.callback(1, 2), 10)
        setTimeout(() => cb.callback(3, 2), 30)
        expect(await cb.waitCallback()).toEqual([1, 2])
        expect(await cb.waitCallback()).toEqual([3, 2])
        expect(await cb.waitCallback()).toEqual([5, 2])
    })
    it("waitCallback-node", async () => {
        const cb = callbackWaiter(true)
        setTimeout(() => cb.callback(null, 5), 50)
        setTimeout(() => cb.callback(null, 1), 10)
        setTimeout(() => cb.callback(null, 3), 30)
        expect(await cb.waitCallback()).toBe(1)
        expect(await cb.waitCallback()).toBe(3)
        expect(await cb.waitCallback()).toBe(5)
    })
    it("waitCallback-node error", async () => {
        const cb = callbackWaiter(true)
        // setTimeout(() => cb.callback(undefined, 1), 10)
        setTimeout(() => cb.callback("cinquenta"), 50)
        expect(cb.waitCallback()).rejects.toEqual("cinquenta")
    })
})
