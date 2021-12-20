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