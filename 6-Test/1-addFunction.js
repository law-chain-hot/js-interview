// 1. 实现超出JS整数存储范围的两个大整数（含负数）相加 function add(a, b)
// 2. 实现一个简单 Promise 库， 只需支持 then(resolve, reject);
// 3. 实现 div 的拖拽效果   

function add(num1, num2) {
    let array1 = num1.split('').reverse();
    let array2 = num2.split('').reverse();
    let count = 0;
    let array3 = [];
    let sign = 0;
    let value1 = 0;
    let value2 = 0;

    while (count < array1.length || count < array2.length) {
        if (count < array1.length) {
            value1 = array1[count];
        } else {
            value1 = 0
        }

        if (count < array2.length) {    
            value2 = array2[count];
        } else {
            value2 = 0
        }

        let sum = parseInt(value1) + parseInt(value2) + sign;


        rest = sum % 10;

        if (sum >= 10) {
            sign = 1;
        } else {
            sign = 0;
        }
        array3.push(rest)
        count++;
    }
    if (sign == 1) array3.push(1);
    return array3.reverse().join('');
}

console.log(add('300000999999999999999999999999999', '20000000000000000000000000000001'))
// console.log(0%10)






// 1. 实现超出JS整数存储范围的两个大整数（含负数）相加 function add(a, b)
// 2. 实现一个简单 Promise 库， 只需支持 then(resolve, reject);
// 3. 实现 div 的拖拽效果

// 在 JavaScript 的类当中，类实例如果不通过实例进行调用，方法中的 this 就不会指向实例，例如：

// class Person {
//     constructor (name) {
//         this.name = name
//     }
//     sayHi () {
//         console.log(`I am ${this.name}.`)
//     }
// }
// const jerry = new Person('Jerry')
// const sayHi = jerry.sayHi
// sayHi() // => 报错
// 所以在类似于 React.js 的组件的事件监听当中我们总是需要手动地进行 bind(this) 操作。
// 为了简化这样的操作，请你完成一个方法 autoBind，它可以接受一个类作为参数，并且返回一个类。
// 返回的类的实例和原来的类的实例功能上并无差别，只是新的类的实例所有方法都会自动 bind 到实例上。例如：

// const BoundPerson = autoBind(Person)

// const jerry = new BoundPerson('Jerry')
// const sayHi = jerry.sayHi
// sayHi() // => I am Jerry.

// const lucy = new BoundPerson('Lucy')
// const sayHi = lucy.sayHi
// sayHi() // => I am Lucy.
// 注意，如果 autoBind 以后给原来的类新增方法，也会自动反映在实例上，例如：

// Person.prototype.sayGood = function () {
//     console.log(`I am ${this.name}. I am good!`)
// }

// const sayGood = lucy.sayGood
// sayGood() // => I am Lucy. I am good!




class Person {
    constructor (name) {
        this.name = name
        this.sayHi = bind(this, sayHi)
    }
    sayHi () {
        console.log(`I am ${this.name}.`)
    }
}
const jerry = new Person('Jerry')
jerry.sayHi()
const sayHi = jerry.sayHi
sayHi() // => 报错



function autoBind(obj) {
    let newObj = Object.create(obj);
    return newObj;
}

console.log()