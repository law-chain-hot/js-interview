
/*

Defination of arr[i][j]: the num of path from (0,0) -> (i,j)

transfer fn: arr[n][n] = arr[n][n - 1] + arr[n- 1][n]

init stat:  arr[0][0] = 1
            arr[0][j] = 1

constraint: j > i   ?   arr[i][j] = 0 

*/




function numOfPathsToDest(n) {
    // Initialize the 2-dimensional array
    const arr = new Array(n).fill(-1)
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(n).fill(-1)
    }

    for(let j = 0; j < n; j++){
        arr[j][0] = 1
        arr[0][j] = 0
    }

    for(let i = 1; i < n; i++){
        for(let j = 1; j < n; j++){
            if(j > i) {
                arr[i][j] = 0
            } else {
                arr[i][j] = arr[i][j - 1] + arr[i - 1][j]
            }
        }

    }

    return arr[n - 1][n - 1]
}



console.log(numOfPathsToDest(4))
