// ===================================
// 1 EventEmitter
console.log('\n========')
const EventEmitter = require('events');
const event = new EventEmitter();

event.on('fn-1', (arg) => {
    console.log('fn-1 is called: ', arg);
})

event.emit('fn-1', 1, 2)




// ===================================
// 2 class
console.log('\n========')
class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let peter = new Person('peter');
peter.on('intro', () => {
    console.log('My name is ' + peter.name)
})

peter.emit('intro')





// ===================================
// 3. File System Module
console.log('\n========')
const fs = require('fs')
fs.writeFile('2-tess', 'lalalal2', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        // console.log("sucessfully wirte");
    }
})

let file = fs.readFile('2-tess', 'utf-8', (err, file) => {
    if (err) {
        console.log(err);

    } else {
        // console.log('readFile: ' + file);

    }
})

let fileSync = fs.readFileSync('1-tess', 'utf-8')

console.log('console.log(file): ' + file);
console.log('console.log(fileSync): ' + fileSync);

// fs.unlink()
// fs.appendFile()
// fs.rename()



// ===================================
// 4. Working with Readable and Writable Streams
// 使用的原因是 readFile会把整个file读取到内存中去，如果file太大超过buffer，就无法读取。
// 但是readStream使用chunk，边读取，边输出

console.log('\n========')

const readStream = fs.createReadStream('1-tess','utf-8')
const writeStream = fs.createWriteStream('1-tess-writeStream')
readStream.on('data', (chunk)=>{
    console.log('chunk: ' + chunk)
    writeStream.write(chunk)
})
// or use pipe()
readStream.pipe(writeStream)




// ===================================
// 5. pipe()
// 以及使用zip
console.log('\n========')

const zlib = require('zlib');
const gzip = zlib.createGzip();      //用于压缩
const gunzip = zlib.createGunzip();  //用于解压
const readStreamGZip = fs.createReadStream('1-tess','utf-8')
const writeStreamGZip = fs.createWriteStream('3-pipe-compress.txt.gz')

readStreamGZip.pipe(gzip).pipe(writeStreamGZip)

const readStreamGunZip = fs.createReadStream('./3-pipe-compress.txt.gz')
const writeStreamGunZip = fs.createWriteStream('3-pipe-uncompress.txt')
// console.log(gunzip)

// readStreamGunZip.pipe(gunzip).pipe(writeStreamGunZip)
