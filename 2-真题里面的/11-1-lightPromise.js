function Promise1(excutor) {
    var self = this
    self.onResolvedCallback = []
    function resolve(value) {
        setTimeout(() => {
            self.data = value
            self.onResolvedCallback.forEach(callback => callback(value))
        })
    }
    excutor(resolve.bind(self))
}
Promise1.prototype.then = function (onResolved) {
    var self = this
    return new Promise(resolve => {
        self.onResolvedCallback.push(function () {
            var result = onResolved(self.data)
            if (result instanceof Promise) {
                result.then(resolve)
            } else {
                resolve(result)
            }
        })
    })
}




class MyPromise {
    constructor(cb) {
        this.value = null;
        this.onResolve = [];
        cb(this.resolve.bind(this));
    }
    resolve(value) {
        this.value = value;
        while (this.onResolve.length > 0) {
            let cb = this.onResolve.pop()
            cb.call(this, value);
        }
    }
    then(cb) {
        let self = this;
        return new MyPromise((resolve) => {
            this.onResolve.push(() => {
                resolve(cb(self.value));
            })
        })
    }
}

var myFirstPromise = new MyPromise(function (resolve) {
    setTimeout(function () {
        console.log("111");

        resolve(1);
    }, 1000);
});
myFirstPromise.then(function (data) {
    console.log("got data: " + data);
})
console.log('222')