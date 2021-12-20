const nums = [0, 2, 1, 5, 3, 4];
var buildArray = function(nums) {
    const arr = [];
    nums.forEach((item, index) => {
        arr[index] = nums[nums[index]];
    });
    return arr;
};
console.log(buildArray(nums));