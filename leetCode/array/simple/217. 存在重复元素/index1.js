const nums = [1, 2, 3, 1];
// 依然还是握手题
var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                return true
            }
        }
    }
    return false
};
console.log(containsDuplicate(nums));