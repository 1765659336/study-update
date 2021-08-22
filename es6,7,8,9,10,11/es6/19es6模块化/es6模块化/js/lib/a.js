'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.fn2 = fn2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = 'xiaoming';
var flag = true;
function sum(num1, num2) {
	return num1 + num2;
}

if (flag) {
	console.log(sum(10, 20));
}

// 导出方式1
exports.flag = flag;
exports.sum = sum;

// 导出方式2

var a = exports.a = 1;

// 导出函数
function fn2() {
	console.log('我是函数2');
}

// 导出类

var Person = exports.Person = function () {
	function Person(name, age) {
		_classCallCheck(this, Person);

		this.name = name;
		this.age = age;
	}
	// 行走


	_createClass(Person, [{
		key: 'run',
		value: function run() {
			console.log(this.name + '在走路');
		}
	}]);

	return Person;
}();

// default导出的方式,可以让引入者自己命名,只能有一个default,要想导出多个变量，可以使用对象的形式


var abc = 'abc';
exports.default = abc;