// # input: n - a positive integer representing the grid size.
// # output: number of valid paths from (0,0) to (n-1,n-1).

function numOfPathsToDest(n){
    // # allocate a 2D array for memoization
    memo = new Array(n).fill(-1)
    for(let i = 0; i < n; i++ ) {
        memo[i] = new Array(n).fill(-1)
    }
    console.log(memo)


    // # the memoization array is initialized with -1
    // # to indicate uncalculated squares.
    return numOfPathsToSquare(n-1, n-1, memo)
}

// # input:
// #    i, j - a pair of non-negative integer coordinates
// #    memo - a 2D memoization array.
// # output:
// #    number of paths from (0,0) to the square represented in (i,j),

function numOfPathsToSquare(i, j, memo){
    // console.log(memo[0])

    if (i < 0 || j < 0)
        return 0
    else if (i < j)
        memo[i][j] = 0
    else if (memo[i][j] != -1)
        return memo[i][j] 
    else if (i == 0 && j == 0)
        memo[i][j] = 1
    else {
        memo[i][j] = numOfPathsToSquare(i, j -1, memo) +
        numOfPathsToSquare(i - 1, j, memo)

    }
    return memo[i][j]
}

console.log(numOfPathsToDest(5))