#### [118. 杨辉三角](https://leetcode-cn.com/problems/pascals-triangle/)

## 题目描述

```
给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
在「杨辉三角」中，每个数是它左上方和右上方的数的和。
```

## 代码实现

```js
const numRows = 5;

var generate = function(numRows) {
    const arr = [];
    for (let i = 0; i < numRows; i++) {
        // 给每一行一个空数组
        arr[i] = [];
        // 每一行的数的个数 = 当前行的行数
        for (let j = 0; j < i + 1; j++) {
            // 第一项和最后一项都是1
            if (j === 0 || j === i) {
                arr[i].push(1)
            } else {
                arr[i].push(arr[i - 1][j - 1] + arr[i - 1][j])
            }
        }
    }
    return arr
};

console.log(generate(numRows));
```