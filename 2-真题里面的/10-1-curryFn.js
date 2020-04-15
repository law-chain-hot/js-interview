// 柯里化
// curry 的这种用途可以理解为：参数复用。本质上是降低通用性，提高适用性。
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



// ========================
// 官方柯里化
function looseCurry(fn,arity = fn.length) {
    return (function nextCurried(prevArgs){
        return function curried(...nextArgs){
            var args = [ ...prevArgs, ...nextArgs ];

            if (args.length >= arity) {
                return fn( ...args );
            }
            else {
                return nextCurried( args );
            }
        };
    })( [] );
}



function uncurry(fn) {
    return function uncurried(...args){
        var ret = fn;

        for (let arg of args) {
            ret = ret( arg );
        }

        return ret;
    };
}