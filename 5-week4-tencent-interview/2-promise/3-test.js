const diyPromise = require('./2-promise.js')
const myPromise = require('./4-myPromise')



console.log('==1')
new myPromise((resolve, reject) => {
    // new diyPromise((resolve, reject) => {

    // setTimeout(() => {
        // console.log('diyPromise is called')
        console.log('==3')
        resolve('resolve');
    // })

})  .then()
    .then(
        value => {
            console.log('==4')
            console.log('then of onFulfilled is called: ', value)
            return "==5"
        },
    )
    .then(
        value => {
            console.log('then of onFulfilled is called: ', value)
        }
    )


console.log('==out 2')



// let t = new myPromise((resolve, reject) => {
//     // new diyPromise((resolve, reject) => {

//         // setTimeout(()=>{
//             // console.log('diyPromise is called')
//             console.log('2')
//             resolve('resolve');
//         // })

//     })  .then()

// console.log('t',t);

