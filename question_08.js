
let shuffle = function(nums) {
    const n = nums.length / 2;
    const result = [];
  
    for (let i = 0; i < n; i++) {
      result.push(nums[i]);
      result.push(nums[i + n]);
    }
  
    return result;
  };