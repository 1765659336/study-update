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