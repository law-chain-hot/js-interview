function flat(arr) {
    let result = Array.from(new Set(arr.flat(Infinity))).sort((a, b) => (a-b));
    // let result = Array.prototype.slice.call(new Set(arr.flat(Infinity))).sort((a, b) => (a-b));
    return result;
}


arr = [[1,8,8,8,[10]], [3,9,[5]],6 ,7]
console.log(flat(arr));
