import * as tslib_1 from "tslib";
export function callbackWaiter(nodeMode) {
    var resolve;
    var reject;
    return {
        callback: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (resolve) {
                if (nodeMode) {
                    if (args[0])
                        reject(args[0]);
                    else
                        resolve(args[1]);
                }
                else {
                    if (arguments.length === 1)
                        resolve(args[0]);
                    else
                        resolve(args);
                }
                resolve = undefined;
                reject = undefined;
            }
        },
        waitCallback: function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (res, rej) {
                            resolve = res;
                            reject = rej;
                        })];
                });
            });
        },
    };
}
//# sourceMappingURL=callbackWaiter.js.map