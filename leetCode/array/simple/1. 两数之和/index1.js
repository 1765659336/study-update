const nums = [2, 7, 11, 15],
    target = 9;
const twoSum = function(nums, target) {
    // 与握手相似,一个人要和其它所有人握手,不要重复握手
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum(nums, target));