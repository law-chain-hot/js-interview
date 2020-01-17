
function findGroup(arr, n, sum) {
    if (sum == 0 && n == 0) {
        return true;
    } else if (n <= 0) {
        return false;
    }
    if (n > 0)
        for (var i = 0; i < arr.length; i++) {
            var temp = arr.slice(i + 1, arr.length);
            return findGroup(temp, n - 1, sum - arr[i])  // 表示选了一个数
                ||
                findGroup(temp, n, sum); // 表示没选一个数
        }
}


let arr = [4, 5, 1, 3, 2, 4, 5, 1, 3, 2, 4, 5, 1, 3, 2, 4, 5, 1, 3, 2, 4, 5, 1]

console.log(findGroup(arr, 5, 12));


getCombination = function (arr, num) {  //  索引数组 操作数数量
    var r = [];
    (function f(t, a, n) {
        if (n == 0) return r.push(t);
        for (var i = 0, l = a.length; i <= l - n; i++) {
            f(t.concat(a[i]), a.slice(i + 1), n - 1);
        }
    })([], arr, num);
    return r;
}




getCombination = function (arr, num) {  //  索引数组 操作数数量
    let combination = [];
    var loop_rec = function (n, arr, f) {
        // base case
        if (n == 0) {
            combination.push(f);
            return;
        }

        // recursive
        for (let i = 0; i < arr.length; i++) {
            loop_rec(n - 1, arr.slice(i+1), f.concat(arr[i]));
        }
    }
    loop_rec (num, arr, [])
    return combination;
}

arr = [1,2,3,4,5];
console.log(getCombination(arr, 3) );
 