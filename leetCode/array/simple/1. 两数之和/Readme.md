#### [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)

## 题目描述

```
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。你可以假设每种输入只会对应一个答案。但是,数组中同一个元素在答案里不能重复出现。你可以按任意顺序返回答案。
```

## 代码实现

```javascript
var twoSum = function(nums, target) {
	// 与握手相似,一个人要和其它所有人握手,不要重复握手
    for(let i = 0; i < nums.length; i++ ){
            for (let j = i + 1; j < nums.length;j++){
                if(nums[i] + nums[j] == target){
                    return [i, j]
                }
            }
        }
};
```

