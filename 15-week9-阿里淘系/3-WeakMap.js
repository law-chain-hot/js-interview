// node --expose-gc

global.gc();
console.log(process.memoryUsage()); // heapUsed: 4638992 ≈ 4.4M

const wm = new WeakMap();
let key = new Array(5 * 1024 * 1024);
wm.set(key, 1);
global.gc();
console.log(process.memoryUsage()); // heapUsed: 46776176 ≈ 44.6M

key = null;
global.gc();
console.log(process.memoryUsage()) // heapUsed: 4800792 ≈ 4.6M

console.log('')
let x = 1;



(() => {
    global.gc();
    // 返回 Nodejs 的内存占用情况，单位是 bytes
    console.log(process.memoryUsage()); // heapUsed: 4640360 ≈ 4.4M

    let map = new Map();
    let key = new Array(5 * 1024 * 1024);
    map.set(key, 1);
    global.gc();
    process.memoryUsage(); // heapUsed: 46751472 注意这里大约是 44.6M

    key = null;
    global.gc();
    process.memoryUsage(); // heapUsed: 46754648 ≈ 44.6M

    // 这句话其实是无用的，因为 key 已经是 null 了
    map.delete(key);
    global.gc();
     
    console.log(process.memoryUsage());// heapUsed: 46755856 ≈ 44.6M
})()

console.log(process.memoryUsage()) // heapUsed: 4800792 ≈ 4.6M
