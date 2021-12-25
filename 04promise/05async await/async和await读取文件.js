const fs = require('fs');
function readfile1() {
	return new Promise(function(resolve, reject) {
		fs.readFile('./files/文件1.md',function(err,data){
			resolve(data);
		})
	})
}

function readfile2() {
	return new Promise(function(resolve, reject) {
		fs.readFile('./files/文件2.md',function(err,data){
			resolve(data);
		})
	})
}

function readfile3() {
	return new Promise(function(resolve, reject) {
		fs.readFile('./files/文件3.md',function(err,data){
			resolve(data);
		})
	})
}

async function main(){
	let data1 = await readfile1();
	let data2 = await readfile2();
	let data3 = await readfile3();
	console.log(data1.toString(),data2.toString(),data3.toString());
}

main();