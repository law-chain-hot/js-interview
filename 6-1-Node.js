const fs = require('fs');
const http = require('http');
const url = require('url');



function promiseReadFile(path) {
    var p = new Promise((reslove, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                reslove(data);
            }

        })
    });

    return p;
}


promiseReadFile('./text.txt')
    .then(data => console.log(data))
    .catch(err => console.log(err, "\nEEEError\n"))


async function asyncReadFile(path) {
    try {
        let response = await promiseReadFile(path);
        console.log(response);
    }
    catch (err) {
        console.log(err, "\nEEEError\n");
    }

}

asyncReadFile ('./t.txt')



// // Promise based fs.readFile
// function awesomeReadFile(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, (err, data) => {
//             if (err) reject(err);
//             resolve(data);
//         });
//     });
// }

// async function awesomeFoo() {
//     try {
//         const data = await awesomeReadFile();
//         console.log(data);
//     } catch (err) {
//         throw err;
//     }
// }


// function a() {
//     this.b = 3
// }
// a.prototype.b = 7;
// var t = new a();
// var b = 2;
// a();
// console.log(t.b);
// console.log(b);




function runAsync1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;            
}
function runAsync2(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 1000);
    });
    return p;            
}
function runAsync3(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 2000);
    });
    return p;            
}


runAsync1()
.then(function(data){
    console.log(data);
    return runAsync2();
})
.then(function(data){
    console.log(data);
    return runAsync3();
})
.then(function(data){
    console.log(data);
});