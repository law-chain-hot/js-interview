/*
input:  arr = [0, -1, -2, 2, 1], k = 1
output: []

{
  0: 1,
  -1: 0,
  -2: -1,
  2: 1
}

create a hash table
create a set with arr
iterate through the original arr
  calculate the complement of each element in arr
  check whether the complement exists in the set
    if it does
      save it in the hash table.
    else
      don't do anything.

return the entries of the output hash.

Solution1: brute force
Time: O(N^2)
Space: O(N)

Solution2: hash table
Time: O(N)
Space: O(N)

Solution3: sort
Time: O(Nlog(N))
Space: O(N)

*/
function findPairsWithGivenDifference(arr, k) {
    // create a set with arr
     const set = new Set(arr);
     const returnArr = [];
    // iterate through the original arr
     for (let i = 0; i < arr.length; i++) {
       // calculate the complement of each element in arr
         const complement = arr[i] + k;
        // check whether the complement exists in the set
         if (set.has(complement)) {
           // if it does
           //  save it in the hash table.
           returnArr.push([complement, arr[i]]);
         }
     }
     
     return returnArr;
   }
   
   console.log(findPairsWithGivenDifference([0, -1, -2, 2, 1], 1));
   