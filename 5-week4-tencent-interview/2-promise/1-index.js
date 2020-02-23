function promiseGenerator() {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 1000)
    })
    return p;
}



let pro = promiseGenerator()
pro.then(
    (value) => {
        console.log('This value is:', value);
    },
    (reson) => {
        console.log('Error, and the reason is:', reson)
    }
)



console.log('========')
console.log('1')
new Promise((resolve, reject) => {
// new diyPromise((resolve, reject) => {

    // setTimeout(()=>{
        // console.log('diyPromise is called')
        console.log('2')
        resolve('resolve');
    // })

})  .then()
    .then(
        value => {
            console.log('4')
            console.log('then of onFulfilled is called: ', value)
        },
        reson => {
            console.log('then of onRejected is called: ', reson)
        }
    )


console.log('3')