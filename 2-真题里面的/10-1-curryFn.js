// 柯里化
function curry(callback, arr = []) {
    // if (!arr) arr = [];
    if (arr.length === callback.length)
        return callback.apply(null, arr);

    fn = function (...args) {
        //recursive
        let newArr = arr.concat(args)
        return curry(callback, newArr);
    }

    return fn;
}


// 偏函数  bind就是偏函数，当   fn.bind(null, 2)
function paritial(fn, ...args1) {
    var returnFn = function (...args2) {
        var newArgs = args1.concat(args2);
        // console.log(newArgs)
        return fn.apply(null, newArgs);
    }
    return returnFn;
}

function add(a, b) {
    return a + b;
}

var addOne = paritial(add, 2);
console.log(addOne(1));







// 惰性函数
var foo = function () {
    var t = new Date();
    foo = function () {
        return t;
    };
    return foo();
};