const arr = [
  { goodsName: "电脑", price: 100 },
  { goodsName: "ipad", price: 1200 },
  { goodsName: "手机", price: 89 }
];

arr.forEach((item)=>{
  item.price.toFixed(2)
})

console.log(arr);