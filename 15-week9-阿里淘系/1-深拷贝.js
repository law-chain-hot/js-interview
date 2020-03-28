
// Version 1
Lodash
/**
 * Lodash js库
 * 使用 cloneDeepWith
 */
_.cloneDeepWith(value, [customizer])



/**
* https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1
* 来自掘金
*/

// Version 2
let deepClone = (target, map = new WeakMap()) => {
    // check if target is array or obj
    let newObject = Array.isArray(target) ? [] : {};

    // To avoid calling itself 
    if (map.get(target)) {
        return map.get(target)
    } else {
        map.set(target, newObject)
    }

    for (let key in target) {
        // assign target[key] as cur
        let cur = target[key]
        // check if cur is object
        if (typeof cur == 'object') {
            newObject[key] = deepClone(cur, map) // To avoid calling itself 
        } else {
            newObject[key] = target[key]
        }
    }
    // console.log(map)
    return newObject
}





// Case1: normal
const target1 = {
    field1: 1,
    field2: undefined,
    field3: 'ConardLi',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    },
    field5: function xx() { }
};

// Case2: array
const target2 = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};

// Case3: call itself
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.targetself = target;


// test
console.log(target)
console.log('=====')
console.log(deepClone(target1))







/**
 * 也正是因为这样的特性，WeakMap 内部有多少个成员，取决于垃圾回收机制有没有运行，运
 * 行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakMap 不可遍历。
 * 所以 WeakMap 不像 Map，一是没有遍历操作（即没有keys()、values()和entries()方法），
 * 也没有 size 属性，也不支持 clear 方法，
 **/

// 所以 WeakMap只有四个方法可用：get()、set()、has()、delete()。


/** 
 * Version1 
 * 问题
 * 不行：函数，循环引用不行
 * 浅拷贝：引用对象
 **/
console.log('')

console.log('JSON.parse(JSON.stringify(target1))')

console.log(JSON.parse(JSON.stringify(target1)))
