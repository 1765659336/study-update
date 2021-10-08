var a = [1];

function fn(a) {
	console.log(a,'+++')
	a[1] = 10;
	a = 2;
	console.log(a,'---');
}

fn(a);
console.log(a);