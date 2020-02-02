function GetNumberOfK(data, k)
{
    let leftIndex = data.indexOf(k);
    let rightIndex = data.lastIndexOf(k);
    if (leftIndex == -1) return 0;
    let diff = rightIndex-leftIndex;
    return diff + 1;
}


var arr = [1,2,2,3];
console.log(GetNumberOfK(arr, 5));

console.log((3 + 5) >> 1)




/**
 * 寻找指定数字的左 / 右边界
 *
 * @param {Array} nums
 * @param {*} target
 * @param {String} mode left | right 寻找左 | 右边界
 */
function findBoundary(nums, target, mode) {
    let left = 0,
      right = nums.length - 1;
  
    while (left < right) {
      let mid = (right + left) >> 1;
  
      if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else if (mode === "left") {
        // nums[mid] === target
        // 如果下标是0或者前一个元素不等于target
        // 那么mid就是左边界
        if (mid === 0 || nums[mid - 1] !== target) {
          return mid;
        }
        // 否则，继续在左部分遍历
        right = mid - 1;
      } else if (mode === "right") {
        // nums[mid] === target
        // 如果下标是最后一位 或者 后一个元素不等于target
        // 那么mid就是右边界
        if (mid === nums.length - 1 || nums[mid + 1] !== target) {
          return mid;
        }
        // 否则，继续在右部分遍历
        left = mid + 1;
      }
    }
  
    // left === right
    if (nums[left] === target) {
      return left;
    }
  
    return -1;
  }
  
  /**
   * 寻找指定数字的出现次数
   *
   * @param {Array} nums
   * @param {*} target
   */
  function getTotalTimes(nums, target) {
    const length = nums.length;
    if (!length) {
      return 0;
    }
  
    return (
      findBoundary(nums, target, "right") - findBoundary(nums, target, "left") + 1
    );
  }
  
  /**
   * 以下是测试代码
   */
  
  const nums = [1, 2, 3, 3, 3, 4, 5];
  console.log(getTotalTimes(nums, 3));