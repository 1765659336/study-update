const arr = [
  { goodsName: "电脑", price: 100 },
  { goodsName: "ipad", price: 1200 },
  { goodsName: "手机", price: 89 }
];

const newArr = arr.map((item)=>{
  item.price.toFixed(2)
  // 有返回值可以return出来
  return item
})

console.log(arr);
console.log(newArr);