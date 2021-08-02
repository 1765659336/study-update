export default {
  install(Vue){
    //全局过滤器,必须写在Vue实例之前
		Vue.filter('mySlice',function(value){
			return value.slice(0,4)
    })
    //定义全局指令
		Vue.directive('fbind',{
			//指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
    })
    // 定义全局混入
    Vue.mixin({
      data(){
        return {
          glo: '全局混入data'
        }
      }
    })
    // 原型对象上添加实例方法
    Vue.prototype.$fnc = function(number){
      return number + 1
    }
  }
};