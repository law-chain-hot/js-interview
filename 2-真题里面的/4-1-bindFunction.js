

Function.prototype.bind3 = function (context) {
    var self = this;                                            // this means invoked method
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        var bindArgs = Array.from(arguments);
        return self.apply(context, args.concat(bindArgs));
    }
}


// 第三版
Function.prototype.bind2 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fBound = function () {
        var bindArgs = Array.from(arguments);
        // diff
        return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
    fBound.prototype = this.prototype;
    return fBound;
}

// 最终版
Function.prototype.bind_final_xx = function (context, ...args1) {

    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    // var args = Array.prototype.slice.call(arguments, 1);
    // console.log(args);
    console.log(args1);

    var fNOP = function () { };

    var fBound = function (...args2) {
        var bindArgs = Array.prototype.slice.call(arguments);
        console.log('bindArgs', bindArgs);
        console.log('params', args2);
        return self.apply(this instanceof fNOP ? this : context, args1.concat(args2));
    }

    fNOP.prototype = self.prototype;
    // 但是在这个写法中，我们直接将 fBound.prototype = this.prototype，
    // 我们直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype。
    // 这个时候，我们可以通过一个空函数来进行中转：
    fBound.prototype = new fNOP();
    return fBound;
}

// ----------------------------------------------------------
// test part
var foo = {
    value: 1
};

function bar(name, age, age2) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
    console.log(age2);
}

bar.prototype.friend = 'Kevin';

var bindFoo = bar.bind_final_xx(foo, 'daisy', 'ke');
var xx = bindFoo('18');
// 1
// daisy
// 18


console.log();
var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);





// ----------------------------------------------------------
// new fNOP() 的原因
Function.prototype.bind2 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
    }
    fBound.prototype = self.prototype;
    return fBound;
}


function bar() { }

var bindFoo = bar.bind_final(null);

bindFoo.prototype.value = 1;

console.log(bar.prototype.value) // 1















// Final
// 最终版
Function.prototype.bind_final = function (context) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    // $$$$$$$$$$$$$$$$$ There $$$$$$$$$$$$$$$$$
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);


    var fNOP = function () { };

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }
    // $$$$$$$$$$$$$$$$$ There $$$$$$$$$$$$$$$$$

    fNOP.prototype = self.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}




Function.prototype.bind3 = function (context) {
    var self = this;                                            // this means invoked method
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        var bindArgs = Array.from(arguments);
        return self.apply(context, args.concat(bindArgs));
    }
}


// #################
// bind ali
Function.prototype.bind_Ali = function (context, ...args1) {
    // if this is not function
    if (typeof context !== "function") {
        throw new Error("This is not a function")
    }

    let that = this
    let emptyObj = {}
    let boundFn = function (...args2){
        // if use 'new'
        if (this instanceof boundFn) {
            context = emptyObj
        }
        return this.apply(context, agrs1.contact(arg2))
    }

    emptyObj.prototype = that.prototype;
    boundFn = new emptyObj();

    return boundFn
 
}