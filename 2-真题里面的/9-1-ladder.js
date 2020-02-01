

function climbWay(n) {
    arr = []
    arr[0] = 1;
    arr[1] = 2;

    for (let i = 2; i < n; i++) {
        arr[2] = arr[0] + arr[1];
        arr[0] = arr[1];
        arr[1] = arr[2];
    }
    return arr[2];
}

console.log(climbWay(50))


function climbWay_2(n) {
    //base case
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    //recursive
    num = climbWay_2(n-1) + climbWay_2(n-2);
    return num;
}

console.log(climbWay_2(50))