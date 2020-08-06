function flat(arr) {
    let result = Array.from(new Set(arr.flat(Infinity))).sort((a, b) => (a-b));
    // let result = Array.prototype.slice.call(new Set(arr.flat(Infinity))).sort((a, b) => (a-b));
    return result;
}


arr = [[1,8,8,8,[10]], [3,9,[5]],6 ,7]
console.log(flat(arr));



/**
 * Flattens passed array in one dimensional array
 *
 * @params {array} arr
 * @returns {array}
 */
function flatten(arr) {
    const result = [];
  
    arr.forEach((i) => {
      if (Array.isArray(i)) result.push(...flatten(i));
      else result.push(i);
    })
    
    return result;
  }
  
  // Usage
  const problem = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
  
  flatten(problem); // [1, 2, 3, 4, 5, 6, 7, 8, 9]





// =======
// flat Ali
function flat_Ali (arr, index) {
  if(index === 0) return arr
  const result = [];
  arr.forEach((el)=>{
    if (Array.isArray(el)) result.push(...flat_Ali(el, index - 1));
    else result.push(el)
  })

  return result
}

  // Usage
  const problem2 = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
  
  console.log(flat_Ali(problem2, 1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


  