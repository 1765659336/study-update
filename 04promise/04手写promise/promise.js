function Promise(evecutor) {
  // 添加属性,new执行函数，this指向构造函数创造的对象
  this.PromiseState = "pending";
  this.PromiseResult = null;
  this.callBacks = [];
  const that = this;
  function resolve(data) {
    // 1 修改状态 2 设置值
    // console.log(this);//this指向window
    // 判断执行return 可以省略{}
    if (that.PromiseState !== "pending") return;
    that.PromiseState = "fulfilled";
    that.PromiseResult = data;
    // that.callBack.onResolved && that.callBack.onResolved(data);
    that.callBacks.forEach(item => {
      item.onResolved(data);
    });
  }
  function reject(data) {
    if (that.PromiseState !== "pending") return;
    that.PromiseState = "rejected";
    that.PromiseResult = data;
    // that.callBack.onResolved && that.callBack.onReject(data);
    that.callBacks.forEach(item => {
      item.onReject(data);
    });
  }

  // throw可以改变promise对象
  try {
    // 执行器函数是同步调用的
    evecutor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

Promise.prototype.then = function(onResolved, onReject) {
  return new Promise((resolve, reject) => {
    // 谁调用的then，this就指向谁
    if (this.PromiseState === "fulfilled") {
      try {
        let result = onResolved(this.PromiseResult);
        // instanceof判断引用数据类型
        if (result instanceof Promise) {
          result.then(
            value => {
              resolve(value);
            },
            reason => {
              reject(reason);
            }
          );
        } else {
          resolve(result);
        }
      } catch (error) {
        reject(error);
      }
    }
    if (this.PromiseState === "rejected") {
      onReject(this.PromiseResult);
    }
    if (this.PromiseState === "pending") {
      this.callBacks.push({ onResolved, onReject });
    }
  });
};
