class myPromise {
    constructor(executor) {
        // 0. Check executor
        if (typeof executor != 'function') {
            throw new TypeError('executor is not a fn')
        }

        // 1. init
        this.initStatus();
        this.initValue();
        this.initBind();

        // 2. execute executor
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }


    initStatus() {
        this.STATUS_RESOLVED = Symbol('resolved');
        this.STATUS_REJECTED = Symbol('rejectd');
        this.STATUS_PENDING = Symbol('pending');
    }

    initValue() {
        this.value = null;
        this.reason = null;
        this.status = this.STATUS_PENDING;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
    }

    initBind() {
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    resolve(value) {
        setTimeout(() => {
            console.log('resolve');
            console.log(this.status);
            if (this.status == this.STATUS_PENDING) {
                // change status and value
                this.status = this.STATUS_RESOLVED;
                this.value = value;
                this.onFulfilledCallbacks.forEach(el => el(this.value))
            }
        })
    }

    reject(reason) {
        setTimeout(() => {

        if (this.status == this.STATUS_PENDING) {
            // change status and value
            this.status = this.STATUS_REJECTED;
            this.reason = reason;
            this.onRejectedCallbacks.forEach(el => el(this.reson))
        }
    })

    }

    // chain callback
    then(onFulfilled, onRejected) {
        // 0. Check the arguments
        if (typeof onFulfilled != 'function') {
            onFulfilled = (value) => {
                return value;
            }
        }
        if (typeof onRejected != 'function') {
            onRejected = (reson) => {
                return reson;
            }
        }


        // 1. onFulfilled 
        if (this.status === this.STATUS_RESOLVED) {
            console.log('onFulfilled')
            const myPromise2 = new myPromise((resolve, reject) => {
                try {
                    let x = onFulfilled(this.value)
                    if (x instanceof myPromise) {
                        x.then(resolve, reject)  // pass the result to myPromise2
                    } else {
                        console.log("this.resolve(x);")
                        resolve(x);
                    }
                } catch (error) {
                    this.reject(error)
                }
            })
            return myPromise2;
        }

        // 2. onRejected
        if (this.status === this.STATUS_REJECTED) {
            console.log('onRejected')
            const myPromise2 = new myPromise((resolve, reject) => {
                try {
                    let x = onRejected(this.reason)
                    if (x instanceof myPromise) {
                        x.then(resolve, reject)  // pass the result to myPromise2
                    }
                } catch (error) {
                    reject(error)
                }
            })
            return myPromise2;
        }


        // 3. onPending
        if (this.status === this.STATUS_PENDING) {
            console.log('onPending')

            const myPromise2 = new myPromise((resolve, reject) => {

                // 3.1 For onFulfilled: push a fn with setTimeout
                this.onFulfilledCallbacks.push((value) => {
                    try {
                        let x = onFulfilled(value)
                        if (x instanceof myPromise) {
                            x.then(resolve, reject)  // pass the result to myPromise2
                        } else {
                            console.log("this.resolve(x);")
                            resolve(x);
                        }
                    } catch (error) {
                        this.reject(error)
                    }
                })

                // 3.2 For onRejected: push a fn with setTimeout
                this.onRejectedCallbacks.push((reason) => {
                    try {
                        let x = onRejected(reason)
                        if (x instanceof myPromise) {
                            x.then(resolve, reject)  // pass the result to myPromise2
                        }
                    } catch (error) {
                        reject(error)
                    }
                })
            })

            return myPromise2
        }

    }

}

myPromise.prototype.catch = (onRejected) => {
    return this.then(null, onRejected)
}

module.exports = myPromise