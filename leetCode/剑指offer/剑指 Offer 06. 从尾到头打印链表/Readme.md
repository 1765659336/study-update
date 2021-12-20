#### [剑指 Offer 06. 从尾到头打印链表](https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/)

## 题目描述

```
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
```

## 代码实现

```js
const head = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 2,
            next: null,
        },
    },
};

var reversePrint = function(head) {
    if (head) {
        if (head.next) {
            return [...reversePrint(head.next), head.val]
        }
        return [head.val]
    }
    return []
};

console.log(reversePrint(head));
```

```js
const head = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 2,
            next: null,
        },
    },
};

var reversePrint = function(head) {
    const arr = [];
    while (head) {
        arr.unshift(head.val);
        head = head.next;
    }
    return arr;
};

console.log(reversePrint(head));
```

