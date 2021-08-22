'use strict';

var _a = require('./a.js');

var obj = _interopRequireWildcard(_a);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

if (_a.flag) {
	console.log((0, _a.sum)(20, 20));
	console.log(_a.a);
	(0, _a.fn2)();
	new _a.Person('刘德华', 18).run();
	console.log(obj.default);
	obj.fn2();
}
// 导入所有的变量


(0, _jquery2.default)('body').css('background-color', 'pink');