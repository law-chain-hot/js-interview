Function.prototype.apply2 = function (context, arr) {
    var context = context || Window;
    context.fn = this;                      // get the function
    
    if (!arr) {
        let result = context.fn();
        delete context.fn;
        return result;
    }

    let result = context.fn(...arr);
    delete context.fn;
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

bar.apply2(foo, ['kevin', 18]); 


