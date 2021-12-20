#### [217. 存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/)

## 题目描述

```
给定一个整数数组，判断是否存在重复元素。
如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
```

## 代码实现

```js
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
```

