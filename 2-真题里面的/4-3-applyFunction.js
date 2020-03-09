Function.prototype.apply2 = function (context, arr) {
    var context = context || Window;
    context.fn = this;                      // get the function
    // console.log(arr)
    if (!arr) {
        let result = context.fn();
        delete context.fn;
        return result;
    }

    let result = context.fn(...arr);
    delete context.fn;
    return result;
}






Function.prototype.apply_for_ali = function (context, arr) {
    // if that is 'null'
    var context = context || Window;

    context.fn = this;
    let result = null;

    if (arr) {
        result = context.fn(...arr);
    } else {
        result = context.fn()
    }
    delete context.fn
    return result;
}



// 测试一下
var foo = {
    value: 1
};

function bar(name, age) {
    console.log('name: ', name)
    console.log('age: ', age)
    console.log('this.value: ', this.value);
}

bar.apply_for_ali(foo, ['kevin', 18]);


