/**
 * 获得当前已使用的localStorage
 */
(function(){
    if(!window.localStorage) {
        console.log('浏览器不支持localStorage');
    }
    var size = 0;
    for(item in window.localStorage) {
        if(window.localStorage.hasOwnProperty(item)) {
            size += window.localStorage.getItem(item).length;
        }
    }
    console.log(size / 1024)
    console.log('当前localStorage容量为' + (size / 1024).toFixed(2) + 'KB');
})()



/**
 * 获得当前localstorage还剩多少内存
 */
let sum = 0,
    count = 0
let testRestStore = setInterval(function () {
    count++;
    sum += 'testString'
    try {
        window.localStorage.setItem(count, 'test')
        console.log(sum.length/1024 + 'KB');
    } catch {
        console.log(sum.length/1024 + 'KB');
    }
}, 0.00001)
testRestStore()