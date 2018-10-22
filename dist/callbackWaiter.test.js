var _this = this;
import * as tslib_1 from "tslib";
import "tslib";
import { callbackWaiter } from "./callbackWaiter";
describe("callbackWaiter", function () {
    it("waitCallback", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var cb, _a, _b, _c;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    cb = callbackWaiter();
                    setTimeout(function () { return cb.callback(5); }, 50);
                    setTimeout(function () { return cb.callback(1); }, 10);
                    setTimeout(function () { return cb.callback(3); }, 30);
                    _a = expect;
                    return [4 /*yield*/, cb.waitCallback()];
                case 1:
                    _a.apply(void 0, [_d.sent()]).toBe(1);
                    _b = expect;
                    return [4 /*yield*/, cb.waitCallback()];
                case 2:
                    _b.apply(void 0, [_d.sent()]).toBe(3);
                    _c = expect;
                    return [4 /*yield*/, cb.waitCallback()];
                case 3:
                    _c.apply(void 0, [_d.sent()]).toBe(5);
                    return [2 /*return*/];
            }
        });
    }); });
    it("waitCallback-multi args", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var cb, _a, _b, _c;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    cb = callbackWaiter();
                    setTimeout(function () { return cb.callback(5, 2); }, 50);
                    setTimeout(function () { return cb.callback(1, 2); }, 10);
                    setTimeout(function () { return cb.callback(3, 2); }, 30);
                    _a = expect;
                    return [4 /*yield*/, cb.waitCallback()];
                case 1:
                    _a.apply(void 0, [_d.sent()]).toEqual([1, 2]);
                    _b = expect;
                    return [4 /*yield*/, cb.waitCallback()];
                case 2:
                    _b.apply(void 0, [_d.sent()]).toEqual([3, 2]);
                    _c = expect;
                    return [4 /*yield*/, cb.waitCallback()];
                case 3:
                    _c.apply(void 0, [_d.sent()]).toEqual([5, 2]);
                    return [2 /*return*/];
            }
        });
    }); });
    it("waitCallback-node", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var cb, _a, _b, _c;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    cb = callbackWaiter(true);
                    setTimeout(function () { return cb.callback(null, 5); }, 50);
                    setTimeout(function () { return cb.callback(null, 1); }, 10);
                    setTimeout(function () { return cb.callback(null, 3); }, 30);
                    _a = expect;
                    return [4 /*yield*/, cb.waitCallback()];
                case 1:
                    _a.apply(void 0, [_d.sent()]).toBe(1);
                    _b = expect;
                    return [4 /*yield*/, cb.waitCallback()];
                case 2:
                    _b.apply(void 0, [_d.sent()]).toBe(3);
                    _c = expect;
                    return [4 /*yield*/, cb.waitCallback()];
                case 3:
                    _c.apply(void 0, [_d.sent()]).toBe(5);
                    return [2 /*return*/];
            }
        });
    }); });
    it("waitCallback-node error", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var cb;
        return tslib_1.__generator(this, function (_a) {
            cb = callbackWaiter(true);
            // setTimeout(() => cb.callback(undefined, 1), 10)
            setTimeout(function () { return cb.callback("cinquenta"); }, 50);
            expect(cb.waitCallback()).rejects.toEqual("cinquenta");
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=callbackWaiter.test.js.map