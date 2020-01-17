//-------------------------------------------------------------------------------------
// 1. Bubble sort
function bubbleSort(arr) {
    var len = arr.length;
    console.time('冒泡排序耗时');
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {        //相邻元素两两对比
                var temp = arr[j + 1];        //元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.timeEnd('冒泡排序耗时');
    return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]





//-------------------------------------------------------------------------------------
// 2. Selection sort
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    console.time('选择排序耗时');
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.timeEnd('选择排序耗时');
    return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]





//-------------------------------------------------------------------------------------
// 3. Insertion Sort
function insertionSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        console.time('插入排序耗时：');
        for (var i = 1; i < array.length; i++) {
            var key = array[i];
            var j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
        console.timeEnd('插入排序耗时：');
        return array;
    } else {
        return 'array is not an Array!';
    }
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(insertionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]





//-------------------------------------------------------------------------------------
// 跳过 4. Shell sort
// 5.归并排序（Merge Sort）
// function mergeSort(arr) {  //采用自上而下的递归方法
//     var len = arr.length;
//     if (len < 2) {
//         return arr;
//     }
//     var middle = Math.floor(len / 2),
//         left = arr.slice(0, middle),
//         right = arr.slice(middle);
//     return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//     var result = [];
//     // console.time('归并排序耗时');
//     while (left.length && right.length) {
//         if (left[0] <= right[0]) {
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }

//     while (left.length)
//         result.push(left.shift());

//     while (right.length)
//         result.push(right.shift());
//     // console.timeEnd('归并排序耗时');
//     return result;
// }
// var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// console.log("");
// console.log("");
// console.log("5.归并排序（Merge Sort)");
// console.log(mergeSort(arr));


//---------------------------------------------
// DIY
function mergeSort(arr) {
    let num = arr.length;

    if (num < 2) {
        return arr;
    }
    let middle = Math.floor(num / 2);
    let arr1 = arr.slice(0, middle);
    let arr2 = arr.slice(middle);

    // resursive part
    let result = merge(mergeSort(arr1), mergeSort(arr2));
    return result;
}


function merge(arr1, arr2) {
    let result = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] > arr2[0]) {
            result.push(arr2.shift());
        }
        else {
            result.push(arr1.shift());
        }
    }

    while (arr1.length) {
        result.push(arr1.shift());
    }

    while (arr2.length) {
        result.push(arr2.shift());
    }

    return result;
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log("");
console.log("");
console.log("5.归并排序（Merge Sort)");
console.log(mergeSort(arr));






//-------------------------------------------------------------------------------------
// 6.快速排序（Quick Sort）
//方法二
// var quickSort2 = function (arr) {
//     // console.time('2.快速排序耗时');
//     if (arr.length <= 1) { return arr; }
//     var pivotIndex = Math.floor(arr.length / 2);
//     var pivot = arr.splice(pivotIndex, 1)[0];
//     var left = [];
//     var right = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     // console.timeEnd('2.快速排序耗时');
//     return quickSort2(left).concat([pivot], quickSort2(right));
// };

// var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// // console.log(quickSort(arr, 0, arr.length - 1));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
// console.log("6.快速排序（Quick Sort）");
// console.log(quickSort2(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]



// DIY
let quickSort = function (arr) {
    let len = arr.length;

    // Base case
    if (len < 2) return (arr);

    // If not turn
    let pivotIndex = Math.floor(len / 2);
    let pivotValue = arr.splice(pivotIndex, 1)[0] // using [0], cuz it is an array

    let left = [];
    let right = [];

    // traverse the arr
    for (let i = 0; i < len - 1; i++) {
        if (arr[i]<pivotValue){
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat([pivotValue], quickSort(right));

} 

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log("6.快速排序（Quick Sort）");
console.log(quickSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]