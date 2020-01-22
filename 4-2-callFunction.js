// Version 1
Function.prototype.call1 = function (context) {
    context.fn = this;
    context.fn();
    delete this.fn;
}



// Version 2
Function.prototype.call2 = function (context) {
    context.fn = this;
    var args = Array.from(arguments).slice(1);
    // eval('context.fn(' + args + ');')
    context.fn(...args);
    delete context.fn;
}




// Version 3
Function.prototype.call3 = function (context) {
    var context = context || Window;    // if context is 'null'

    context.fn = this;
    var args = Array.from(arguments).slice(1);
    var result = context.fn(...args);
    delete context.fn;

    return result;
}





// Test
// 测试一下
var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}

bar.call3(foo, 'kevin', 18);





function bar_return(name, age) {
    return {
        name: name,
        age: age,
        value: this.value
    }
}

console.log(bar_return.call3(foo, 'kevin', 18)); 











// final
// Version 3
Function.prototype.call3 = function (context) {
    var context = context || Window;    // if context is 'null'

    context.fn = this;
    var args = Array.from(arguments).slice(1);
    var result = context.fn(...args);
    delete context.fn;

    return result;
}