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