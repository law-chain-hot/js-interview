function promiseAll(promises) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(promises)) {
            return reject(new TypeError('arguments must be an array'));
        }
        var resolvedCounter = 0;
        var promiseNum = promises.length;
        var resolvedValues = new Array(promiseNum);
        for (let i = 0; i < promiseNum; i++) {
            Promise.resolve(promises[i]).then(function (value) {
                resolvedCounter++
                resolvedValues[i] = value
                if (resolvedCounter == promiseNum) {
                    return resolve(resolvedValues)
                }
            }, function (reason) {
                return reject(reason)
            })
        }
    })
}


for (var i = 0; i < promiseNum; i++) {
    (function (i) {
        Promise.resolve(promises[i]).then(function (value) {
            resolvedCounter++
            resolvedValues[i] = value
            if (resolvedCounter == promiseNum) {
                return resolve(resolvedValues)
            }
        }, function (reason) {
            return reject(reason)
        })
    })(i)
}


Promise.all = function (promises) {
    let results = [];
    return new Promise((resolve, reject) => {
        promises.forEach((val) => {
            // 按顺序执行每一个Promise操作
            val.then(function (res) {
                results.push(res);
            });
        });
        resolve(results);
    });
}



