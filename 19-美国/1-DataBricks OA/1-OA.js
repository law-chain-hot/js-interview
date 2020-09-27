// 第一题是给定一个array，对每个大小为3的子串都进行是否zigzag的判断，
// 对于长度为n的子串，输出n-2个布尔值。例如 1 2 1 3。则输出true, true。
// zigzag的定义就是a < b > c 或者 a > b < c 这样。


function zigzag(array) {
    const length = array.length
    if (length <= 2) {
        return
    }

    for (let i = 1; i < length - 1; i++) {

    }
}



/*
第二题是一个模拟，给出一个由W,D和L组成的字符串和一个初始为空的答案字符串，
按照以下操作序列来操，先判断字符串中是否有W，有的话从原字符串中删除一个W，加到答案字符串末尾。
再判断字符串中是否有D，有的话删一个D，加到答案字符串末尾，然后对L进行同样的判断。
不断循环这三个步骤直到原字符串为空，返回答案字符串。

we have a string that consists of 'W'  'D'  'L', eg.   'WWWLDDDLDWW'

1. check if 'W' exists
    true -> delete a 'W' from original, and add "W" to the end of answer
2. check if 'D'
    true -> delete a 'D' from original, and add "D" to the end of answer
3. check if 'L' ....
    ..... do same as above 

until the original string is empty



Answer:
1. one loop
    get the num of W D L

2. find the smallest one, if it is zero, just skip it
    2.1 And generate the WDL by minimal one, and the number of each letter minus the smallest

3. Find the second smallest number, and the number of each letter minus the second smallest
    3.1 Do as above

4. As above
*/

function findNewString_1(string) {
    // Init
    let W = 0,
        D = 0,
        L = 0

    // 1. Get the number of each letter
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'W') W++
        else if (string[i] === 'D') D++
        else if (string[i] === 'L') L++
    }
    let array = []
    array.push([W, 'W'])
    array.push([D, 'D'])
    array.push([L, 'L'])
    array.sort((a, b) => a[0] - b[0])
    // console.log(array)

    let result = ''
    // 2. find the smallest one, if it is zero, just skip it
    for (let i = 0; i < array.length; i++) {
        let currNum = array[i][0]
        if (currNum !== 0) {
            let curr = ''
            let temp = ''
            for (let j = i; j < array.length; j++) {
                temp += array[j][1]
            }

            for (let k = 0; k < currNum; k++) {
                curr += temp
            }
            result += curr

            // handle the number of each one
            for (let l = 0; l < array.length; l++) {
                array[l][0] -= currNum
            }
        }
    }
    return result
}



function findNewString_2(string) {
    // Init
    let W = 0,
        D = 0,
        L = 0

    // 1. Get the number of each letter
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'W') W++
        else if (string[i] === 'D') D++
        else if (string[i] === 'L') L++
    }
    let array = []
    array.push([W, 'W'])
    array.push([D, 'D'])
    array.push([L, 'L'])

    let result = ''
    // 2. find the smallest one, if it is zero, just skip it
    while (array[0][0] !== 0 || array[1][0] !== 0 || array[2][0] !== 0) {

        for (let i = 0; i < 3; i++) {
            let currNum = array[i][0]
            let currLetter = array[i][1]
            if (currNum !== 0) {
                array[i][0] -= 1
                result += currLetter
            }
        }
    }

    return result
}


let testString = 'WWWLLLLD'
console.log(findNewString_1(testString))

console.log(findNewString_2(testString))




/*
第三题叫boarder sort，给定一个 n x n的二维矩阵，这个矩阵会有一层层的“边框”，第一个边框是从(0,0)到(0,n-1)到(n-1,n-1)到(n-1,0)，
第二个是从(1,1)到(1,n-2)到(n-2,n-2)到(n-2,1)，诸如此类，对于每一个边框，
把位于边框上的元素排序，按照从左上开始的顺时针顺序重新放在边框上。例如[ [4,1],[2,3] ]会变成[[1,2],[3,4]]
*/

function boarderSort(array) {
    const x = array.length
    const y = array[0].length
    const halfX = x / 2
    for (let i = 0; i < halfX; i++) {
        let currArray = []
        // pushing top boarder
        for (let j = 0; j < y - i; j++) {
            currArray.push(array[i][j])
        }
        // pushing right boarder
        for (let j = i + 1; j < x - i; j++) {
            currArray.push(array[j][y - i - 1])
        }
        // pushing bottom
        for (let j = y - i - 2; j >= 0; j--) {
            currArray.push(array[x - i - 1][j])
        }

        currArray.sort((a, b) => a - b)

        // traverse the currArr
        for (let j = 0; j < y - i; j++) {
            array[i][j] = currArray.shift()
        }
        for (let j = i + 1; j < x - i; j++) {
            
            array[j][y - i - 1] = currArray.shift()
            console.log(currArray, array)
        }
        // for (let j = y - i - 2; j >= 0; j--) {
        for (let j = 0; j < y - i - 1; j++) {
            console.log(currArray)
            array[x - i - 1][j] = currArray.shift()
        }
    }
    return array
}

// let testArray = [[4, 1, 5, 6], [2, 3, 7, 8], [10, 9, 11, 12], [15, 14, 13, 16]]
// console.log(testArray)
// console.log(boarderSort(testArray))


testArray = [[4,3], [1,2]]
console.log(testArray)
console.log(boarderSort(testArray))






/*

第四题是给出两种操作(0,a,b)和(1,a,b)，前者表示给你一个axb的矩形，后者是一次询问，
询问你当前收到的所有矩形是否都能放进一个axb的盒子里，并不是问能否同时塞进盒子。
而是只要矩形1能放进去，矩形2也能放进，就算OK。
输入一个操作序列，返回询问的结果数组。


Answer:
对于每次存下来的a x b的矩形，我们把a和b中长的边称为长边，短的称为短边。
接下来对于一次询问(1, X, Y)，我们需要回答是否目前我读入的所有的矩形都能放进一个尺寸为X x Y的盒子且矩形能90度旋转
。矩形的90度旋转其实无非就是长短边换一下。所以可以这样考虑
，无论是盒子还是我们的矩形，都让长边在水平方向，短边在竖直方向，若某个矩形放不进盒子，
那么一定是它的长边大于盒子长边或短边大于盒子短边。也就是说，如果我们所有的矩形都放得下这个盒子，那
么我们所有矩形中最长的长边也不会超过盒子的长边，所有矩形中最长的短边也不会超过盒子的短边。


**所以我们可以只维护目前收到的矩形的最长长边和最长短边**

*/






/*
第四题：给一个list of integer, 包含负数，对与两个index i,j, i <= j, find the number of combinations that input + input[j] 
       equals to some power of 2.
             例如：For input = [1, -1, 2, 3], the output should be pairSummingToPowerOfTwo(a) = 5.
                      (1, 2): a[1] + a[2] = -1 + 2 = 1.
                      (0, 0): a[0] + a[0] = 1 + 1 = 2.
                      (1, 3): a[1] + a[3] = -1 + 3 = 2.
                      (0, 3): a[0] + a[3] = 1 + 3 = 4.
                      (2, 2): a[2] + a[2] = 2 + 2 = 4.
*/



/*
Create all possibilities of power of 2

Have a hashmap,  
    1. Stored key: visted number.
    2. Checkd key: possibilities - currentNum

for each number
    1. check if its own is power of two.  If (num & num - 1) === 0    it is 
    2. then, check it the map contains (possibilities - currentNum)
    3. Add the curr number into the map
*/


function pairSummingToPowerOfTwo(a) {
    // init
    let count = 0
    const hashVisited = {}

    // Create all possibilities
    allPowerOfTwo = []
    for(let i = 0; i < 32; i++){
        allPowerOfTwo.push(Math.pow(2, i))
    }

    for(let curr of a){
        // check if curr is power of 2
        if((curr & curr - 1) === 0) count++
        // check if map contains for all power of two
        for(let power of allPowerOfTwo){
            if(hashVisited[power - curr] !== undefined){
                count++
            }
        }
        // add
        hashVisited[curr] = 0
    }

    return count
}

let test = [1, -1, 2, 3]
console.log(pairSummingToPowerOfTwo(test))




