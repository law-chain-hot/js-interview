// 在线面试平台。将链接分享给你的朋友以加入相同的房间。
// Author: tdzl2003<dengyun@meideng.net>

// 小程序团队一共有 n 名成员，决定出去春游，在山脚下遇到出租自行车的马老板，他手上有 m 辆待出租的自行车，价格分别是 b1 、b2 ... bm;
// 小程序团队中每个人身上的现金都有限，分别是 a1 a2 ... an，和 S 元的公共经费


// 问题 1

// 团队成员都愿意借钱给其他同事，那么这时候团队最多能租到多少自行车（租到的车数量小于人数）



function max( Array n, Array m, S) {
  	let sum = 0
  	let sortedArr = quickSort(m)
    // get the sum of n
  	for ( let item of n) {
     	sum +=  item
    }
  	sum += S
  
  	// calculate the num
  	let num = 0
  	while(sum > 0) {
      sum -= sortedArr[num]
    	num++
    }
  	
    return num
}


/**
 * @params {array} arr
 * @return {array}
 */

function quickSort(arr) {
	// base case
  if (arr.length < 2) {
  	return arr
  }
  
  // init
  let result = []
  let middleIndex = arr.length >> 1; // math.floor( length/2)
  let middleValue = arr.splice(middleIndex - 1, 1)[0]  
  let left = []
  let right = []
  
  // recursive part
  for ( let item of arr) {
  	if ( item < middleValue ){
    	left.push(item)
    } else {
      right.push(item)
    }
  } 
  return quickSort(left).concat(middleValue, quickSort(right));
  
}



// 场景2
// 团队成员不愿意借钱给别人的

//问题一 是不是所有人都能租到自行车？

function isAll(Array n, Array m, S){
  // get the sum of money
	let sumMoney = 0
  for ( let item of n ) {
     	sumMoney += item
  }
  sumMoney += S
  
  // get the sum of bicycle money
  let sumBicycle = 0
  for ( let item of n ) {
     	sumBicycle += item
  }
  
  
  // Case 0: 
  if ( m.length < n.length) {
  	return false
  }

  // Case 1: if the total money is less than sumBicycle
  if ( sumMoney < sumBicycle) {
    return false
  }
  
  
  
  
  // Case 2: money is enough
  // init part 
  let sortedBicycle = quickSort(m)
  let sortedMoney = quickSort(n)
  let index = 0
	//  let index_M = 0
  
  // while loop
  while ( index_B < n.length ) {
    let money = sortedMoney[index]
    let cost = sortedMoney[index]
    if ( money >= cost) {
      index++
    }
    // if money is less than cost, we need get money from S
    else {
      S -= cost - money
      index++
    }
    if ( S < 0 ) return index
  }
 
	return true
 
}


//问题二 请问给出一个策略
// - 使得整个团队租到最多的自行车
// - 在租到最多自行车的情况下，整体的支出尽量的少
// - 不借钱



function tryLessMoney(Array n, Array m, S){  
 	let num = isAll(n, m, S) + 1

}










