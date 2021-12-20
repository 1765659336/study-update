const nums = [0, 2, 1, 5, 3, 4];
var buildArray = function(nums) {
    return nums.map((item, index) => {
        return nums[nums[index]]
    })
};
console.log(buildArray(nums));