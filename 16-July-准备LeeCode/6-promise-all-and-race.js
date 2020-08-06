// Promise.all = function (iterator) {  
//     let count = 0//用于计数，当等于len时就resolve
//     let len = iterator.length
//     let res = []//用于存放结果
//     return new Promise((resolve,reject) => {
//         for(var item of iterator){
//             Promise.resolve(item)//先转化为Promise对象
//             .then((data) => {
//                 res[count++] = data
//                 if(count === len){
//                     resolve(res)
//                 }
//             })
//             .catch(e => {
//                 reject(e)
//             })
//         }
//     })
// }


Promise.all = function (promises) {  
    let count = 0//用于计数，当等于len时就resolve
    let len = promises.length
    let res = new Array(len)
    return new Promise((resolve,reject) => {
        promises.forEach((curr, index) => {
            Promise.resolve(curr)//先转化为Promise对象
            .then((data) => {
                res[index] = data
                count++
                if(count === len ){
                    resolve(res)
                }
            })
            .catch(e => {
                reject(e)
            })
        })
    })
}

var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise3, promise2]).then(function(values) {
  console.log(values);
});






Promise.race = function (iterators) {  
    return new Promise((resolve,reject) => {
        for (const p of iterators) {
            Promise.resolve(p)
            .then((res) => {
                resolve(res)
            })
            .catch(e => {
                reject(e)
            })
        }
    })

}
var promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(function(value) {
  console.log(value);
  // Both resolve, but promise2 is faster
});``