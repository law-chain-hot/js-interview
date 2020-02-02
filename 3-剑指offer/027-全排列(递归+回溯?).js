function swap(arr, x, y){
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

//create the arr of result
var result = [];

//this is recursive fn
function getResult(arr, index){
    //base case
    if (arr.length-1 == index){
        result.push(arr.join(''));
        return;
    }
    
    // recursive part
    for (let i = index; i < arr.length; ++i){
        if (i == index || arr[i] !== arr[index]){
            swap(arr, index, i);
            getResult(arr, index+1);
            swap(arr, index, i);
        }

    }
}


function Permutation(str)
{
    // write code here
    if (!str) return [];
    var arr = str.split("").sort();// convert into arr
    // console.log(arr)
    getResult(arr, 0);// return arr of result
    return result.sort();
}

console.log(Permutation('aa'));





//------------------------------------------------------------------------------------------------
var result = []

function Answer_Permutation(str) {
        //分割字符串为数组并排序
    var arr = str.split("").sort()
    getArr(arr, 0)
    
    return result.sort()
}

function getArr(arr, pos) {
    if (pos == arr.length - 1) {
        result.push(arr.join(''))
    }
    for (var i = pos; i < arr.length; i++) {
        if (i == pos || arr[i] != arr[pos]) {
            swap(arr, pos, i)
            getArr(arr, pos + 1)
            swap(arr, pos, i)
        }
    }
}

function swap(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}