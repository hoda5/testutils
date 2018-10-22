export function callbackWaiter<T>(nodeMode?: boolean): {
    callback: (...args: any[]) => void,
    waitCallback(): Promise<T>,
} {
    let resolve: any
    let reject: any
    return {
        callback(...args: any[]) {
            if (resolve) {
                if (nodeMode) {
                    if (args[0]) reject(args[0])
                    else resolve(args[1])
                } else {
                    if (arguments.length === 1) resolve(args[0])
                    else resolve(args)
                }
                resolve = undefined
                reject = undefined
            }
        },
        async waitCallback() {
            return new Promise<T>((res, rej) => {
                resolve = res
                reject = rej
            })
        },
    }
}
