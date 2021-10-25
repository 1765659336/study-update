function addOverloading(a:number,b:number)
function addOverloading(a:string,b:string)
function addOverloading(a:any,b:any){
  if(typeof(a)==="number"){
    return a + b
  }else if(typeof(a) === "string"){
    return `${a},${b}`
  }else {
    return "false"
  }
}

console.log(addOverloading(1,2));//3