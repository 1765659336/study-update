function fn() {
  if (!new.target) {
    console.log(new.target);
    console.log("函数正常调用");
  } else {
    console.log(new.target);
  }
}
/* 
控制台: ƒ fn(){
  if(!new.target){
    console.log(new.target);
    console.log("函数正常调用");
  }else {
    console.log(new.target);
  }
}
 */
new fn();