const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let arr = [];//二维数组保存
for (let i = 0; i < 3; i++) {
    let temp = readline().split(' ');
    arr[i] = new Array();
    for (let j = 0; j < temp.length; j++) {
        arr[i][j] = parseInt(temp[j]);
    }
}