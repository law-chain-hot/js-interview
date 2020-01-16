
function findGroup(arr, n, sum) {
    if (sum == 0 && n == 0) {
        return true;
    } else if (n <= 0) {
        return false;
    }
    if (n > 0)
        for (var i = 0; i < arr.length; i++) {
            var temp = arr.slice(i + 1, arr.length);
            return findGroup(temp, n - 1, sum - arr[i]) || findGroup(temp, n, sum);
        }
}


let arr = [4, 5, 1, 3, 2]

console.log(findGroup(arr, 3, 12));


