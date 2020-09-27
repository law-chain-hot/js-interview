function memoMethod(i, j, memo, n){
    // base cases
    if(i === n-1 && j === n-1)
      return 1
    else if(j > i)
      memo[i][j] = 0
    else if(i > n - 1 || j > n - 1)
      return 0
    else if(memo[i][j] !== -1)
      return memo[i][j]
    else
      memo[i][j] = memoMethod(i+1, j, memo, n) + memoMethod(i, j+1, memo, n)

    return memo[i][j]
}


function numOfPathsToDest(n) {
    // Initialize the memo
    const memo = new Array(n).fill(-1)
    for(let i = 0; i < n; i++){
      memo[i] = new Array(n).fill(-1)
    }
    
    memoMethod(0, 0, memo, n)

    console.log(memo)
    return memo[0][0] 
  }
  


  console.log(numOfPathsToDest(4))
  