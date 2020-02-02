function FindNumbersWithSum(array, sum)
{
  var low = 0, height = array.length - 1
    var currentSum = 0, result = []
    while (low < height) {
        currentSum = array[low] + array[height]
        if (sum === currentSum) {
            result.push([array[low], array[height]])
            low++
        } else if (currentSum < sum) {
            low++
        } else {
            height--
        }
    }
    
    if (result.length === 0) {
        return []
    } else {
        return result[0]
    }
	
}