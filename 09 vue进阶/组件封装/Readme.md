# 前置知识

## 组件通信的方式

### 父传子 props

```js
//传递数据：
<Demo name="shangguigu" :age="18"></Demo>
//接收数据：
//方式1：普通形式
props:['name','age']
//方式2：限制数据类型的形式
props:{
    name:String,
        age:Number
}
//方式3：限制传递规则
props:{
    name:{
        type:String,
            required:true
    },
        age:{
            type:Number,
                default:99
        }
}
```

### 子传父自定义事件

传递给子组件的事件会在子组件vm.$emit属性身上

```js
// 父组件中
<HelloWorld msg="Welcome to Your Vue.js App" @sum="clg"/>
    methods: {
        clg: function(num1, num2){
            console.log(num1 + num2);
            console.log(this);
        }
    }
// 子组件中
mounted() {
    this.$emit("sum",1,2);
},
```

### 任意组件之间全局事件总线

`全局事件总线的思路:`vm 身上有\$on，我们只需要让所有的 vc 都可以随时访问到 vm 即可，根据原型对应关系 Vue.prototype = VueComponent . ** proto ** . propotype，给 Vue.prototype 添加一个属性，属性值是 vm，就可以实现，前辈的智慧。

`自定义Bus:`

```js
class Bus {
    constructor() {
        this.callbacks = {};
    }
    $on(name, fn) {
        this.callbacks[name] = this.callbacks[name] || [];
        this.callbacks[name].push(fn);
    }
    $emit(name, args) {
        if (this.callbacks[name]) {
            this.callbacks[name].forEach(cb => cb(args));
        }
    }
    $off(name) {
        delete this.callbacks[name];
    }
}
```

```js
  //main.js
  new Vue({
	  render: h => h(App),
	  beforeCreate(){
	  	Vue.prototype.$bus = this
	  }
  }).$mount('#app')
  //绑定事件（接收数据）
  mounted() {
    this.$bus.$on('getSchoolName',value => {
      console.log(this.name + '在' + value + '读书');
    })
  },
  //执行事件（发送数据）
  methods: {
    sendSchoolName(){
      this.$bus.$emit('getSchoolName',this.name)
    }
  },
  //注销事件
  beforeDestroy() {
    this.$bus.$off('getSchoolName')
  },
```

### 任意组件之间 vuex3.0

`安装vuex`

```
npm install vuex --save
```

`main.js`

```js
//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue";
// 引入store
import store from "./store";
//关闭Vue的生产提示
Vue.config.productionTip = false;

// 引入vuex之后就Vm中就有一个store属性了
//创建vm
new Vue({
  el: "#app",
  render: h => h(App),
  store
});
```

`store.js`

```js
import Vuex from "vuex";
import Vue from "vue";

// --------- Vuex原理的三剑客
const actions = {
  incrementOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit("INCREMENT", value);
    }
  },
  incrementWait(context, value) {
    setTimeout(() => {
      context.commit("INCREMENT", value);
    }, 500);
  }
};
const mutations = {
  INCREMENT(state, value) {
    state.sum += value;
  },
  DECREMENT(state, value) {
    state.sum -= value;
  }
};
// 类似于组件中的data，数据源
const state = {
  sum: 1
};
// 类似于组件的计算属性，可在多个组件中复用的计算属性
const getters = {
  bigSum(state) {
    return state.sum * 10;
  }
};
// ---------

// 在这里声明使用插件，而不在main.js中引用
/* 因为在main.js中引用，模块化的代码执行顺序是先执行import外部模块代码，在执行自己模块的代码，在main.js中引用该store/index.js模块时，
没有先声明Vuex,那么在执行import store from './store' 时解析到调用了new Vuex.Store,但是main.js中的使用插件Vue.use(Vuex)代码执行在import后面*/
Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});
```

`Count.vue`

```html
<template>
  <div>
    <h1>当前求和为：{{$store.state.sum}}</h1>
    <h2>当前求和结果放大十倍是: {{$store.getters.bigSum}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  export default {
    name: "Count",
    data() {
      return {
        n: 1 //用户选择的数字
      };
    },
    methods: {
      increment() {
        this.$store.commit("INCREMENT", this.n);
      },
      decrement() {
        this.$store.commit("DECREMENT", this.n);
      },
      incrementOdd() {
        this.$store.dispatch("incrementOdd", this.n);
      },
      incrementWait() {
        this.$store.dispatch("incrementWait", this.n);
      }
    }
  };
</script>

<style lang="css">
  button {
    margin-left: 5px;
  }
</style>
```

#### Vuex 辅助函数

##### mapState 与 mapGetters

当我们需要读取 store 中 state 的数据，我们需要多次书写`this.$store.state`，代码冗余，这时可以使用 mapState 来快速获取 state 中的数据

mapGetters 同理

```js
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    // ------自己写计算属性
    // sum(){
    //   return this.$store.state.sum
    // },
    // bigSum(){
    //   return this.$store.getters.bigSum
    // }
    // ------
    // 生成计算属性对象写法
    // ...mapState({sum:'sum'}),
    // 数组写法
    ...mapState(["sum"]),
    // ...mapGetters({bigSum:'bigSum'})
    ...mapGetters(["bigSum"])
  }
};
```

#### mapMutations 与 mapActions

```html
<template>
  <button @click="increment(n)">+</button>
  <button @click="decrement(n)">-</button>
  <button @click="incrementOdd(n)">当前求和为奇数再加</button>
  <button @click="incrementWait(n)">等一等再加</button>
</template>
```

```js
export default {
  methods: {
    /* increment() {
			this.$store.commit("INCREMENT",this.n)
    },
    decrement() {
      this.$store.commit("DECREMENT",this.n)
    }, */

    // 会自动接收页面中{{increment}}接收的参数，如果页面中不传，那么会接收到event事件参数
    ...mapMutations({ increment: "INCREMENT", decrement: "DECREMENT" }),

    /* incrementOdd() {
      this.$store.dispatch("incrementOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("incrementWait", this.n);
    } */
    // ...mapActions({incrementOdd:'incrementOdd',incrementWait:'incrementWait'})
    // 如果函数名和后面的通信参数相同可以使用数组
    ...mapActions(["incrementOdd", "incrementWait"])
  }
};
```

#### namespace\modules

`store/index.js`

```js
//该文件用于创建Vuex中最为核心的store
import Vue from "vue";
//引入Vuex
import Vuex from "vuex";
import countOptions from "./count";
import personOptions from "./person";
//应用Vuex插件
Vue.use(Vuex);

//创建并暴露store
export default new Vuex.Store({
  modules: {
    countOptions,
    personOptions
  }
});
```

`store/count.js`

```js
//求和相关的配置
export default {
  namespaced: true,
  actions: {
    jiaOdd(context, value) {
      console.log("actions中的jiaOdd被调用了");
      if (context.state.sum % 2) {
        context.commit("JIA", value);
      }
    },
    jiaWait(context, value) {
      console.log("actions中的jiaWait被调用了");
      setTimeout(() => {
        context.commit("JIA", value);
      }, 500);
    }
  },
  mutations: {
    JIA(state, value) {
      console.log("mutations中的JIA被调用了");
      state.sum += value;
    },
    JIAN(state, value) {
      console.log("mutations中的JIAN被调用了");
      state.sum -= value;
    }
  },
  state: {
    sum: 0, //当前的和
    school: "尚硅谷",
    subject: "前端"
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    }
  }
};
```

``person.js`

```js
//人员管理相关的配置
import axios from "axios";
import { nanoid } from "nanoid";
export default {
  namespaced: true,
  actions: {
    addPersonWang(context, value) {
      if (value.name.indexOf("王") === 0) {
        context.commit("ADD_PERSON", value);
      } else {
        alert("添加的人必须姓王！");
      }
    },
    addPersonServer(context) {
      axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
        response => {
          context.commit("ADD_PERSON", { id: nanoid(), name: response.data });
        },
        error => {
          alert(error.message);
        }
      );
    }
  },
  mutations: {
    ADD_PERSON(state, value) {
      console.log("mutations中的ADD_PERSON被调用了");
      state.personList.unshift(value);
    }
  },
  state: {
    personList: [{ id: "001", name: "张三" }]
  },
  getters: {
    firstPersonName(state) {
      return state.personList[0].name;
    }
  }
};
```
#### vuex的目录结构

```
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```

### 任意组件之间消息订阅与发布

借助消息订阅与发布第三方库实现

先下载第三方包 `npm install pubsub-js --save`

`消息订阅者`

```js
import pubsub from 'pubsub-js'
mounted() {
    this.pubsubGSN = pubsub.subscribe('getSchoolName',(msgName,data) => {
        // 一定要使用箭头函数的形式，不然this指向就是undefined,或者将回调函数写在methodes中
        console.log('感谢'+ msgName + '发布者的发布');
        console.log(this.name + '在' + data + '读书');
    })
},
    beforeDestroy() {
        // this.$bus.$off('getSchoolName')
        pubsub.unsubsctibe(this.pubsubGSN)
    },
```

`消息的发布者`

```js
methods: {
    sendSchoolName(){
        // this.$bus.$emit('getSchoolName',this.name)
        pubsub.publish('getSchoolName',this.name)
    }
},
```

### 兄弟组件之间$parent/$root

```js
// 接收数据组件
methods: {
      btn(){
        this.$parent.$off("clg")
        this.$root.$off("hello")
      }
    },
    mounted() {
      this.$parent.$on("clg",function(msg){
        console.log(msg)
      })
      this.$root.$on("hello",function(name){
        console.log("hello",name);
      })
    },
// 发送数据组件
methods: {
    btn() {
      this.$parent.$emit("clg", "msg from Child2");
    },
    hello() {
      this.$root.$emit("hello", "HelloWorld");
    }
  }
```

### 子传父$children（不推荐）

`$children的顺序不能保证`，常规情况下，是按照组件的书写顺序来决定的，但是当有异步组件的时候，顺序就不清楚了。

`和$ref的区别？`$children只能获取到vue组件实例，而$ref还可以获取到原生的dom元素

```js
// 子组件
data() {
    return {
        a: 1
    }
},
methods: {
    clg(name){
       console.log("hai! I'm",name);
    }
},
// 父组件
mounted() {
    console.log(this.$children[0]);
    this.$children[0].clg('zhangsan');
    console.log(this.$children[0].a);
},
```

### 长辈多代传递给后代$attrs/$listeners

包含了⽗作⽤域中**不作为** **prop** **被识别** (且获取) 的特性绑定 ( class 和 style 除外)。当⼀个组件没有

声明任何 prop 时，这⾥会包含所有⽗作⽤域的绑定 ( class 和 style 除外)，并且可以通过 v-bind="$attrs"传⼊内部组件——在创建⾼级别的组件时⾮常有⽤。

```js
// 爷
<Child2 :num="1" @info="info"></Child2>
methods: {
    info(){
        console.log("info")
    }
},
// 爸
<Sun v-bind="$attrs" v-on="$listeners"></Sun>
// 孙
<div>
    Sun
{{$attrs.num}}
<button @click="$listeners.info">sun</button>
</div>
```



### 子传父$refs

```js
// 子组件
<Child1 ref="child1"></Child1>
// 父组件
mounted() {
    this.$refs.child1.clg("zhangsan");
},
```



### 多代互传provide/inject

```js
// 发送者
export default {
	...
	provide(){
		return {
			cname:"zhangsan"
		}    
	}
	...
}
// 接收者
export default {
	...
// inject: ['cname'],
// 起别名
	inject: {
		'ccname': "cname"
	}
	...
}
```



## 插槽

### 默认插槽

````html
<Category>
    <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
</Category>
````

```html
<template>
	<div class="category">
		<!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
		<slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
	</div>
</template>

<script>
	export default {
		name:'Category',
	}
</script>
```



### 具名插槽

```html
<Category title="美食" >
    <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    <a slot="footer" href="http://www.atguigu.com">更多美食</a>
</Category>

<Category title="游戏" >
    <ul slot="center">
    <li v-for="(g,index) in games" :key="index">{{g}}</li>
    </ul>
    <div class="foot" slot="footer">
    <a href="http://www.atguigu.com">单机游戏</a>
    </div>
    <!-- 具名插槽有多个相同插槽时，后面的不会覆盖前面的，而是追加 -->
    <div class="foot" slot="footer">
    <a href="http://www.atguigu.com">网络游戏</a>
    </div>
</Category>

<Category title="电影">
    <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    <!-- 使用了template的时候，插槽就有了第二种方式，但是只能在template中使用，不推荐使用 -->
    <template v-slot:footer>
        <div class="foot">
        <a href="http://www.atguigu.com">经典</a>
        <a href="http://www.atguigu.com">热门</a>
        <h4>欢迎前来观影</h4>
    </template>
</Category>
```

```html
<template>
	<div class="category">
		<!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
		<slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
		<slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现2</slot>
	</div>
</template>
```



### 作用域插槽

````html
<template>
	<div class="container">
		<Category>
			<!-- scope会接到插槽传递过来的对象，这里使用对象解构的形式接收games -->
			<template scope="{games}">
				<ul><li v-for="(item,index) in games" :key="index">{{item}}</li></ul>
			</template>
		</Category>
		<Category>
			<!-- v-slot会接到插槽传递过来的对象，这里使用对象解构的形式接收games -->
			<template v-slot="{games}">
				<ol><li v-for="(item,index) in games" :key="index">{{item}}</li></ol>
			</template>
		</Category>
		<Category>
			<!-- slot-scope会接到插槽传递过来的对象，这里使用对象解构的形式接收games -->
			<!-- 三种方式都可以接收到，没有什么区别 -->
			<template slot-scope="{games}">
				<p v-for="(item,index) in games" :key="index">{{item}}</p>
			</template>
		</Category>
	</div>
</template>
````

````html
<template>
	<div class="category">
		<!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
		<!-- 给插槽的使用者传递数据 -->
		<slot :games="games">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
	</div>
</template>

<script>
	export default {
		name:'Category',
		data(){
			return {
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
			}
		}
	}
</script>
````
