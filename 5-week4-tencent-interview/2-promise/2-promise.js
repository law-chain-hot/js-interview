class diyPromise {
    //executor is the argument of fn
    constructor(executor) {
        // 0. check if executor is fn
        if (typeof executor != 'function') {
            throw new TypeError(`Promise executor ${executor}, is not a fn`)
        }

        // 1.Initialization
        this.initValue()

        // 2. bind all fn
        this.initBind()


        // 3. try executor
        try {
            executor(this.resolve, this.reject)
        }
        catch (error) {
            // 如果回调函数的执行发生错误，抛出异常
            // promise会“主动”扭转状态
            this.reject(error);
        }
    }


    initValue() {
        this.value = null;
        this.reason = null;
        this.status = 'pending';
        this.onFulfilledCallbacks = [] // for async
        this.onRejectedCallbacks = []  // for async
    }

    initBind() {
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    resolve(value) {
        // console.log(this)
        if (this.status === 'pending') {
            this.status = 'fulfilled'
            this.value = value;
            this.onFulfilledCallbacks.forEach(fn => fn(this.value))
        }
    }

    reject(reson) {
        if (this.status === 'pending') {
            this.status = 'rejected'
            this.reason = reason;
            this.onRejectedCallbacks.forEach(fn => fn(this.reason))
        }
    }

    //then
    then(onFulfilled, onRejected) {
        // 0. check arguments. 所谓的 <穿透>
        if (typeof onFulfilled !== 'function') {
            onFulfilled = (value) => {
                return value
            }
        }

        if (typeof onRejected !== 'function') {
            onRejected = (reason) => {
                throw reason
            }
        }

        // 1. execute the fn: fulfilled
        if (this.status == 'fulfilled') {
            setTimeout(() => {
                onFulfilled(this.value)
            })
        }

        // 2. execute the fn: rejected
        if (this.status == 'rejected') {
            setTimeout(() => {
                onRejected(this.reason)
            })
        }

        // 3. execute the fn: pending
        if (this.status == 'pending') {
            // 3.1 For onFulfilled: push a fn with setTimeout
            this.onFulfilledCallbacks.push((value) => {
                setTimeout(() => {
                    onFulfilled(value)
                })
            }) 
            // 3.2 For onRejected: push a fn with setTimeout
            this.onRejectedCallbacks.push((reason) => {
                setTimeout(() => {
                    onRejected(reason)
                })
            }) 
        }
    }
}


module.exports = diyPromise