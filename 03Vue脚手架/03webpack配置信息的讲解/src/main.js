/* 
	该文件是整个项目的入口文件
*/
//引入Vue，引入的是残缺版的，消除了模板解析核心代码，查看package.json中的module可以看到引入的文件是什么
import Vue from 'vue'
// 完整版,引入完整版的包括模板解析核心代码，因此可以不写成render形式，可以直接配置template项,但是文件会比残缺版
// 大小大，项目上线的时候使用webpack打包的时候，webpack会打包多余的模板解析代码，浪费空间
// import Vue from '../node_modules/vue/dist/vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

/* 
	关于不同版本的Vue：
	
		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/

//创建Vue实例对象---vm
new Vue({
	el:'#app',
	//render函数完成了这个功能：将App组件放入容器中
	// render: h => h(App),
	
	// render的完整形式,,,,模板渲染的时候会自动调用render函数
	render: function(createElement){
		// return createElement('h1','你好啊')
		return createElement(App)
	}

	// template:`<h1>你好啊</h1>`,
	// components:{App},
})