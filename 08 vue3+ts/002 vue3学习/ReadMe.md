# Vue3

## 一、创建 Vue3.0 工程

### 1.使用 vue-cli 创建

官方文档：https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create

```bash
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version
## 安装或者升级你的@vue/cli
npm install -g @vue/cli
## 创建
vue create vue_test
## 启动
cd vue_test
npm run serve
```

### 2.使用 vite 创建

官方文档：https://v3.cn.vuejs.org/guide/installation.html#vite

```bash
## 创建工程
npm init vite-app <project-name>
## 进入工程目录
cd <project-name>
## 安装依赖
npm install
## 运行
npm run dev
```

```bash
## 创建工程
 yarn create vite <project-name> --template vue
## 进入工程目录
 cd <project-name>
## 安装依赖
 yarn
## 运行
 yarn dev
```

## 二、常用 API

官方文档: https://v3.cn.vuejs.org/guide/composition-api-introduction.html

### 1.setup 入口

1. 理解：Vue3.0 中一个新的配置项，值为一个函数。
2. setup 是所有<strong style="color:#DD5145">Composition API（组合 API）</strong><i style="color:gray;font-weight:bold">“ 表演的舞台 ”</i>。
3. `组件中所用到的：数据、方法等等，均要配置在setup中`。
4. setup 函数的两种返回值：
   1. `若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。`（重点关注！）
   2. <span style="color:#aad">若返回一个渲染函数：则可以自定义渲染内容。（了解）</span>
5. 注意点：
   1. `尽量不要与Vue2.x配置混用`
      - Vue2.x 配置（data、methos、computed...）中<strong style="color:#DD5145">可以访问到</strong>setup 中的属性、方法。
      - 但在 setup 中<strong style="color:#DD5145">不能访问到</strong>Vue2.x 配置（data、methos、computed...）。
      - 如果有重名, setup 优先。
   2. `setup不能是一个async函数`，因为返回值不再是 return 的对象, 而是 promise, 模板看不到 return 对象中的属性。（后期也可以返回一个 Promise 实例，但需要 Suspense 和异步组件的配合）

```html
<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄: {{age}}</h2>
  <button @click="sayHello">说你好</button>
</template>

<script>
  // import { h } from "vue";

  export default {
    name: "App",
    // 无响应式的写法
    setup() {
      let name = "张三";
      let age = 18;

      function sayHello() {
        alert(`我叫${name},我${age}岁了，你好啊`);
      }

      // 1、返回一个对象（常用）
      return {
        name,
        age,
        sayHello
      };
      /* 
    // 2、返回一个函数
    return () => h('h1','你好') */
    }
  };
</script>

<style></style>
```

### 2.ref 函数

- 作用: 定义一个响应式的数据，实现vue2中ref作用
- 语法: `const xxx = ref(initValue)`
  - 创建一个包含响应式数据的`引用对象（reference对象，简称ref对象）。`
  - JS 中操作数据： `xxx.value`
  - 模板中读取数据: 不需要.value，直接：`<div>{{xxx}}</div>`
- 备注：
  - 接收的数据可以是：基本类型、也可以是对象类型。
  - 基本类型的数据：响应式依然是靠`Object.defineProperty()`的`get`与`set`完成的。
  - 对象类型的数据：对象的属性内部 <i style="color:gray;font-weight:bold">“ 求助 ”</i> 了 Vue3.0 中的一个新函数—— `reactive`函数。

```html
<template>
  <h1 ref="hRef">一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄: {{age}}</h2>
  <button @click="change">改变人的信息</button>
  <h2>职业：{{obj.type}}</h2>
  <h2>工资：{{obj.salary}}</h2>
  <button @click="clg">输出职业与工资</button>
</template>

<script>
  import { ref } from "vue";
  export default {
    name: "App",
    setup() {
      let hRef = ref();
      let name = ref("张三");
      let age = ref(18);
      let obj = ref({
        type: "UI",
        salary: "40k"
      });

      function change() {
        name.value = "李四";
        age.value = 20;
      }

      function clg() {
        console.log(obj.value.type, obj.value.salary);
      }

      return {
        hRef,
        name,
        age,
        change,
        obj,
        clg
      };
    }
  };
</script>

<style></style>
```

### 3.reactive 函数

- 作用: 定义一个`对象类型的响应式数据`（基本类型不要用它，要用`ref`函数）
- 语法：`const 代理对象= reactive(源对象)`接收一个对象`（或数组）`，返回一个代理对象（Proxy 的实例对象，简称`proxy对象`)
- 取值对象直接通过.属性名获取，数组通过下标获取
- reactive 定义的响应式数据是“深层次的”。
- `内部基于 ES6 的 Proxy 实现`，通过代理对象操作源对象内部数据进行操作。

```html
<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{p.name}}</h2>
  <h2>年龄: {{p.age}}</h2>
  <button @click="change">改变人的信息</button>
  <h2>职业：{{p.obj.type}}</h2>
  <h2>工资：{{p.obj.salary}}</h2>
</template>

<script>
  import { reactive } from "vue";
  export default {
    name: "App",
    setup() {
      let p = reactive({
        name: "张三",
        age: 18,
        obj: {
          type: "UI",
          salary: "40k"
        }
      });

      function change() {
        p.name = "李四";
        p.age = 20;
        p.obj.type = "前端";
        p.obj.salary = "20k";
      }

      return {
        p,
        change
      };
    }
  };
</script>

<style></style>
```

### 4.Vue3.0 中的响应式原理

#### vue2.x 的响应式

- 实现原理：

  - 对象类型：通过`Object.defineProperty()`对属性的读取、修改进行拦截（数据劫持）。

  - 数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。

    ```js
    Object.defineProperty(data, "count", {
      get() {},
      set() {}
    });
    ```

- 存在问题：

  - 新增属性、删除属性, 界面不会更新。
  - 直接通过下标修改数组, 界面不会自动更新。

#### Vue3.0 的响应式

- 实现原理:

  - 通过 Proxy（代理）: 拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。

  - 通过 Reflect（反射）: 对源对象的属性进行操作。

  - MDN 文档中描述的 Proxy 与 Reflect：

    - Proxy：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy

    - Reflect：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

      ```js
      new Proxy(data, {
        // 拦截读取属性值
        get(target, prop) {
          return Reflect.get(target, prop);
        },
        // 拦截设置属性值或添加新属性
        set(target, prop, value) {
          return Reflect.set(target, prop, value);
        },
        // 拦截删除属性
        deleteProperty(target, prop) {
          return Reflect.deleteProperty(target, prop);
        }
      });
      
      proxy.name = "tom";
      ```

### 5.reactive 对比 ref

- 从定义数据角度对比：
  - ref 用来定义：<strong style="color:#DD5145">基本类型数据</strong>。
  - reactive 用来定义：<strong style="color:#DD5145">对象（或数组）类型数据</strong>。
  - 备注：ref 也可以用来定义<strong style="color:#DD5145">对象（或数组）类型数据</strong>, 它内部会自动通过`reactive`转为<strong style="color:#DD5145">代理对象</strong>。
- 从原理角度对比：
  - ref 通过`Object.defineProperty()`的`get`与`set`来实现响应式（数据劫持）。
  - reactive 通过使用<strong style="color:#DD5145">Proxy</strong>来实现响应式（数据劫持）, 并通过<strong style="color:#DD5145">Reflect</strong>操作<strong style="color:orange">源对象</strong>内部的数据。
- 从使用角度对比：
  - ref 定义的数据：操作数据<strong style="color:#DD5145">需要</strong>`.value`，读取数据时模板中直接读取<strong style="color:#DD5145">不需要</strong>`.value`。
  - reactive 定义的数据：操作数据与读取数据：<strong style="color:#DD5145">均不需要</strong>`.value`。

### 6.setup 的两个注意点

- `setup执行的时机`

  - 在 beforeCreate 之前执行一次，`this是undefined`。`所以不要在setup中使用this`

- setup 的参数
  - props：值为对象，包含：`组件外部传递过来，且组件内部setup()我外面声明props:[]接收了的属性`。
  - context：上下文对象
    - attrs: 值为对象，包含：组件外部传递过来，但没有在 props 配置中声明的属性, 相当于 `this.$attrs`。`捡漏，捡组件props没有接收的值`
    - slots: 收到的插槽内容`虚拟DOM节点对象`, 相当于 `this.$slots`。
    - emit: 分发自定义事件的函数, 相当于 `this.$emit`。`记得在setup中使用emits:[]接收到外部传入的自定义事件`

`Son.vue`

```html
<template>
  <div>姓名：{{cname}}</div>
  <div>年龄：{{cage}}</div>
  <slot>默认值</slot>
  <button @click="$emit('fn')">执行父组件的方法</button>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["cname"],
  emits: ["fn"],
  setup(props, context) {
    console.log(this); //undefined
    console.log(props);
    console.log(context);
    console.log(context.slots);
    console.log(context.emit);
    let cname = ref(props.cname);
    let cage = ref(context.attrs.cage);
    return {
      cname,
      cage
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
```

`App.vue`

```html
<template>
  <h1>setup的两个注意点</h1>
  <Son cname="hahaha" :cage="18" @fn="fn">嘻嘻</Son>
  <button @click="fn">点我</button>
</template>

<script>
import Son from "./components/Son.vue";
export default {
  name: "App",
  components: { Son },
  setup() {
    let fn = function(){
      console.log('父组件的方法');
    }
    return {
      fn
    }
  }
};
</script>
```

### 7.计算属性与监视

#### 1.computed 函数

- 与 Vue2.x 中 computed 配置功能一致

- 写法

  ```js
  <template>
    <div>{{person.firstName}}</div>
    <div>{{person.lastName}}</div>
    <div>{{fullName}}</div>
    <div>{{fullName2}}</div>
    <button @click="fn">改变姓名</button>
  </template>
  
  <script>
  import { reactive, computed } from "vue";
  export default {
    setup() {
      let person = reactive({
        firstName: "liu",
        lastName: "jie"
      });
  
      // 计算属性-简便写法
      let fullName = computed(() => {
        return person.firstName + "-" + person.lastName;
      });
  
      // 计算属性-完整写法
      let fullName2 = computed({
        get() {
          return person.firstName + "-" + person.lastName;
        },
        // 当值改变的时候，回调的函数
        set(value) {
          console.log('set执行了');
          const nameArr = value.split("-");
          person.firstName = nameArr[0];
          person.lastName = nameArr[1];
        }
      });
  
      let fn = function() {
        console.log("执行了");
        console.log(fullName2.value);
        fullName2.value = "zhang-san";
      };
  
      return {
        fullName,
        fullName2,
        fn,
        person
      };
    }
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  ```

#### 2.watch 函数

- 与 Vue2.x 中 watch 配置功能一致

- 两个小“坑”：

  - 监视 reactive 定义的响应式数据时：oldValue 无法正确获取、强制开启了深度监视（deep 配置失效）。
  - 监视 reactive 定义的响应式数据中某个属性时：deep 配置有效。

  ```js
  //情况一：监视ref定义的响应式数据
  watch(sum,(newValue,oldValue)=>{	console.log('sum变化了',newValue,oldValue)},{immediate:true})
  //情况二：监视多个ref定义的响应式数据
  watch([sum,msg],(newValue,oldValue)=>{	console.log('sum或msg变化了',newValue,oldValue)}) 
  /* 情况三：监视reactive定义的响应式数据			
  若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！			
  若watch监视的是reactive定义的响应式数据，则强制开启了深度监视 */
  watch(person,(newValue,oldValue)=>{	console.log('person变化了',newValue,oldValue)},{immediate:true,deep:false}) //此处的deep配置不再奏效
  //情况四：监视reactive定义的响应式数据中的某个属性名而不是属性值
  watch(()=>person.job,(newValue,oldValue)=>{	console.log('person的job变化了',newValue,oldValue)},{immediate:true,deep:true}) 
  //情况五：监视reactive定义的响应式数据中的某些属性名而不是属性值
  watch([()=>person.job,()=>person.name],(newValue,oldValue)=>{	console.log('person的job变化了',newValue,oldValue)},{immediate:true,deep:true})
  //特殊情况
  watch(()=>person.job,(newValue,oldValue)=>{    console.log('person的job变化了',newValue,oldValue)},{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效
  ```

#### 3.watchEffect 函数

- watch 的套路是：既要指明监视的属性，也要指明监视的回调。

- watchEffect 的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。

- watchEffect 有点像 computed：

  - 但 computed 注重的计算出来的值（回调函数的返回值），所以必须要写返回值。
  - 而 watchEffect 更注重的是过程（回调函数的函数体），所以不用写返回值。

  ```html
  <template>
    <div>
      <input type="number" v-model="num1">
      <input type="number" v-model="num2">
      <input type="text" v-model="person.cname">
    </div>
  </template>
  
  <script>
  /* 
  - watch 的套路是：既要指明监视的属性，也要指明监视的回调。
  - watchEffect 的套路是：不用指明监视哪个属性，”监视的回调中用到哪个属性，那就监视哪个属性“(值的深究，不推荐使用，有坑)。
  - watchEffect 有点像 computed：
    - 但 computed 注重的计算出来的值（回调函数的返回值），所以必须要写返回值。
    - 而 watchEffect 更注重的是过程（回调函数的函数体），所以不用写返回值。
  */
  import { ref, watchEffect, reactive } from "vue";
  export default {
    setup() {
      let num1 = ref(1);
      let num2 = ref(2);
      let person = reactive({
        cname: "zhangsan"
      });
      watchEffect(() => {
        // 在这里有一个坑，如果num1.value + num2.value 不> 10 
        // 那么判断条件不会去判断person.cname，也就是没有用上，所以person.cname的值改变时，不会触发监听回调函数
        if (num1.value + num2.value > 10 && person.cname === "lisi") {
          console.log("大");
        } else {
          console.log("小或者不是lisi");
        }
      });
      return {
        num1,
        num2,
        person
      };
    }
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  ```

### 8.生命周期

<div style="border:1px solid black;width:380px;float:left;margin-right:20px;"><strong>vue2.x的生命周期</strong><img src="https://cn.vuejs.org/images/lifecycle.png" alt="lifecycle_2" style="zoom:33%;width:1200px" /></div><div style="border:1px solid black;width:510px;height:985px;float:left"><strong>vue3.0的生命周期</strong><img src="https://v3.cn.vuejs.org/images/lifecycle.svg" alt="lifecycle_2" style="zoom:33%;width:2500px" /></div>

1

- Vue3.0 中可以继续使用 Vue2.x 中的生命周期钩子，但是有两个被更名：
  - `beforeDestroy`改名为 `beforeUnmount`
  - `destroyed`改名为 `unmounted`
- Vue3.0 也提供了 Composition API 形式的生命周期钩子，与 Vue2.x 中钩子对应关系如下：
  - `beforeCreate`===>`setup()`
  - `created`=======>`setup()`
  - `beforeMount` ===>`onBeforeMount`
  - `mounted`=======>`onMounted`
  - `beforeUpdate`===>`onBeforeUpdate`
  - `updated` =======>`onUpdated`
  - `beforeUnmount` ==>`onBeforeUnmount`
  - `unmounted` =====>`onUnmounted`























































































### 9.自定义 hook 函数

- 什么是 hook？—— 本质是一个函数，把 setup 函数中使用的 Composition API 进行了封装。

- 类似于 vue2.x 中的 mixin。

- 自定义 hook 的优势: 复用代码, 让 setup 中的逻辑更清楚易懂。

  ```html
  <template>
    <div>
      <div>count: {{count}}</div>
      <button @click="()=>{count++}">count+1</button>
      <div>鼠标点击的x坐标为{{Point.x}}鼠标点击的y坐标为{{Point.y}}</div>
    </div>
  </template>
  
  <script>
  import { ref, onBeforeUnmount, reactive, onMounted } from "vue";
  export default {
    setup() {
      let count = ref(0);
      let Point = reactive({
        x: 0,
        y: 0
      });
      function PointFn(event) {
        Point.x = event.pageX;
        Point.y = event.pageY;
      }
      onBeforeUnmount(() => {
        window.removeEventListener("click", PointFn);
      });
      onMounted(() => {
        window.addEventListener("click", PointFn);
      });
      return { count, Point };
    }
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  ```

  改造成一个hook函数

  ```js
  import { onBeforeUnmount, reactive, onMounted } from "vue";
  export default function() {
    let Point = reactive({
      x: 0,
      y: 0
    });
    function PointFn(event) {
      Point.x = event.pageX;
      Point.y = event.pageY;
    }
    onBeforeUnmount(() => {
      window.removeEventListener("click", PointFn);
    });
    onMounted(() => {
      window.addEventListener("click", PointFn);
    });
    return Point;
  }
  ```

  ```html
  <template>
    <div>
      <div>count: {{count}}</div>
      <button @click="()=>{count++}">count+1</button>
      <div>鼠标点击的x坐标为{{Point.x}}鼠标点击的y坐标为{{Point.y}}</div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import usePoint from '../hooks/usePoint.js'
  export default {
    setup() {
      let count = ref(0);
      let Point = usePoint();
      return { count, Point };
    }
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  ```

### 10.toRef

- 作用：创建一个 ref 对象，其 value 值指向另一个对象中的某个属性。
- 语法：`const name = toRef(person,'name')`
- 应用: 要将响应式对象中的某个属性单独提供给外部使用时。

* 扩展：`toRefs` 与`toRef`功能一致，但可以批量创建多个 ref 对象，语法：`toRefs(person)`

```html
<template>
  <div>
    <div>姓名：{{person.cname}}</div>
    <div>年龄：{{person.cage}}</div>
    <div>工资：{{person.salary.j.num}}</div>
    <button @click="()=>{person.cname += '~'}">改名</button>
    <button @click="()=>{person.cage++}">长大一岁</button>
    <button @click="()=>{person.salary.j.num+=1000}">涨薪1000</button>
  </div>
</template>

<script>
import {reactive} from 'vue';
export default {
  setup () {
    let person = reactive({
      cname: 'zhangsan',
      cage: 18,
      salary: {
        j:{
          num: 20000
        }
      }
    })

    return {
      person
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
```

每一次都要写person.xxx，在template中很不简洁，我们想到可以在导出的时候就.一下

```html
<template>
  <div>
    <div>姓名：{{cname}}</div>
    <div>年龄：{{cage}}</div>
    <div>工资：{{salary}}</div>
    <button @click="()=>{cname += '~'}">改名</button>
    <button @click="()=>{cage++}">长大一岁</button>
    <button @click="()=>{salary+=1000}">涨薪1000</button>
  </div>
</template>

<script>
import {reactive} from 'vue';
export default {
  setup () {
    let person = reactive({
      cname: 'zhangsan',
      cage: 18,
      salary: {
        j:{
          num: 20000
        }
      }
    })

    return {
      cname: person.cname,
      cage: person.cage,
      salary: person.salary.j.num
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
```

如果这样写的话，cname,cage,salary指向的值既不是被ref修饰过的，也不是被reactive修饰过的，直接是对象属性所指的内存地址的值，失去了响应式，因此我们需要toRef和toRefs来重新添加响应式

```html
<template>
  <div>
    <div>姓名：{{cname}}</div>
    <div>年龄：{{cage}}</div>
    <div>工资：{{salary}}</div>
    <button @click="()=>{cname += '~'}">改名</button>
    <button @click="()=>{cage++}">长大一岁</button>
    <button @click="()=>{salary+=1000}">涨薪1000</button>
  </div>
</template>

<script>
import {reactive,toRef} from 'vue';
export default {
  setup () {
    let person = reactive({
      cname: 'zhangsan',
      cage: 18,
      salary: {
        j:{
          num: 20000
        }
      }
    })

    return {
      cname: toRef(person,"cname"),
      cage: toRef(person,"cage"),
      salary: toRef(person.salary.j,"num")
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
```

```html
<template>
  <div>
    <div>姓名：{{cname}}</div>
    <div>年龄：{{cage}}</div>
    <div>工资：{{salary.j.num}}</div>
    <button @click="()=>{cname += '~'}">改名</button>
    <button @click="()=>{cage++}">长大一岁</button>
    <button @click="()=>{salary.j.num+=1000}">涨薪1000</button>
  </div>
</template>

<script>
import {reactive,toRefs} from 'vue';
export default {
  setup () {
    let person = reactive({
      cname: 'zhangsan',
      cage: 18,
      salary: {
        j:{
          num: 20000
        }
      }
    })

    return {
      ...toRefs(person)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
```

## 三、其它 Composition API

### 1.shallowReactive 与 shallowRef

- shallowReactive：只处理对象最外层属性的响应式（浅响应式）。
- shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。

- 什么时候使用?
  - 如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===> shallowReactive。
  - 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> shallowRef。

```html
<template>
  <div>
    <div>姓名：{{cname}}</div>
    <div>年龄：{{cage}}</div>
    <div>工资：{{salary.j.num}}</div>
    <div>a: {{a}}</div>
    <button @click="()=>{a++}">a+1</button>
    <button @click="()=>{cname += '~'}">改名</button>
    <button @click="()=>{cage++}">长大一岁</button>
    <button @click="()=>{salary.j.num+=1000}">涨薪1000(无响应式)</button>
  </div>
</template>

<script>
import {shallowReactive,shallowRef,toRefs} from 'vue';
export default {
  setup () {
    let person = shallowReactive({
      cname: 'zhangsan',
      cage: 18,
      salary: {
        j:{
          num: 20000
        }
      }
    });
    let a = shallowRef(20);
    return {
      ...toRefs(person),
      a,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
```

### 2.readonly 与 shallowReadonly

- readonly: 让一个响应式数据变为只读的（深只读）。
- shallowReadonly：让一个响应式数据变为只读的（浅只读）。
- 应用场景: 不希望数据被修改时。

```html
<template>
  <div>
    <div>姓名：{{cname}}</div>
    <div>年龄：{{cage}}</div>
    <div>工资：{{salary.j.num}}</div>
    <button @click="()=>{cname += '~'}">改名</button>
    <button @click="()=>{cage++}">长大一岁</button>
    <button @click="()=>{salary.j.num+=1000}">涨薪1000</button>
  </div>
</template>

<script>
import {reactive,toRefs,readonly,shallowReadonly} from 'vue';
export default {
  setup () {
    let person = reactive({
      cname: 'zhangsan',
      cage: 18,
      salary: {
        j:{
          num: 20000
        }
      }
    })
    // 只读不让改
    // person = readonly(person);
    person = shallowReadonly(person);
    return {
      ...toRefs(person)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
```

### 3.toRaw 与 markRaw

- toRaw：
  - 作用：将一个由`reactive`生成的<strong style="color:orange">响应式对象</strong>转为<strong style="color:orange">普通对象</strong>。`并且保持引用关系，修改这个普通对象还是会改变响应式对象中的值，只是失去了响应式，页面不能刷新`
  - 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。
- markRaw：
  - 作用：标记一个对象，使其永远不会再成为响应式对象。
  - 应用场景:
    1. 有些值不应被设置为响应式的，例如复杂的第三方类库等。
    2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。
  

```html
<template>
  <div>
    <div>person:{{person}}</div>
    <button @click="()=>{person.cage++}">person.age+1</button>
    <button @click="clg">输出最原始的对象</button>
    <button @click="addCar">给人添加一辆车</button>
    <button @click="changeCar">修改车的名</button>
  </div>
</template>

<script>
import { reactive, toRaw, markRaw } from "vue";
export default {
  setup() {
    let person = reactive({
      cname: "zhangsan",
      cage: 18
    });

    function clg() {
      let p = toRaw(person);
      p.cage++;
      console.log(p);
    }

    function addCar(){
      // 这样子后面可以被修改
      // person.car = {carName: '兰博基尼'};
      // 这个car对象失去了响应式，但是如果这个person对象的其它属性改变时，person.car也会变为最新的数据
      person.car = markRaw({carName: '兰博基尼'});
    }

    function changeCar(){
      person.car.carName = '法拉利';
    }

    return {
      person,
      clg,
      addCar,
      changeCar
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
```



### 4.customRef

- 作用：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。

- 实现防抖效果：

  ```vue
  <template>
    <input type="text" v-model="keyword" />
    <h3>{{ keyword }}</h3></template
  ><script>
  import {ref,customRef} from 'vue'	
      export default {		
          name:'Demo',		
          setup(){			
              // let keyword = ref('hello') 
              //使用Vue准备好的内置ref			
              //自定义一个myRef			
              function myRef(value,delay){				
                  let timer				
                  //通过customRef去实现自定义				
                  return customRef((track,trigger)=>{					
                      return{						
                          get(){							
                              track() 
                              //告诉Vue这个value值是需要被“追踪”的
                              return value
                          },
                          set(newValue){
                              clearTimeout(timer)
                              timer = setTimeout(()=>{
                                  value = newValue
                                  trigger() 
                                  //告诉Vue去更新界面
                              },delay)
                          }
                      }
                  })
              }
              let keyword = myRef('hello',500) //使用程序员自定义的ref
              return {
                  keyword
              }
          }
      }
  </script>
  ```

### 5.provide 与 inject

<img src="https://v3.cn.vuejs.org/images/components_provide.png" style="width:300px" />

- 作用：实现<strong style="color:#DD5145">祖与后代组件间</strong>通信

- 套路：父组件有一个 `provide` 选项来提供数据，后代组件有一个 `inject` 选项来开始使用这些数据

- 具体写法：

  1. 祖组件中：

     ```html
     <template>
       <div>
         <div>父组件</div>
         <Son></Son>
       </div>
     </template>
     
     <script>
     import { reactive, provide } from "vue";
     import Son from "./components/Son.vue";
     export default {
       setup() {
         let person = reactive({
           cname: "zhangsan",
           cage: 18
         });
     
         provide("person", person);
         return {};
       },
       components: {
         Son
       }
     };
     </script>
     
     <style lang="scss" scoped>
     </style>
     ```
  
  2. 后代组件中：
  
     ```html
     <template>
       <div>
         <div>子组件</div>
         <div>{{sonPerson}}</div>
       </div>
     </template>
     
     <script>
     import {inject} from 'vue';
     export default {
       setup () {
         let sonPerson = inject('person')
     
         return {
           sonPerson
         }
       }
     }
     </script>
     
     <style lang="scss" scoped>
     
     </style>
     ```

### 6.响应式数据的判断

- isRef: 检查一个值是否为一个 ref 对象
- isReactive: 检查一个对象是否是由 `reactive` 创建的响应式代理
- isReadonly: 检查一个对象是否是由 `readonly` 创建的只读代理
- isProxy: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理

```html
<template>
  <div>

  </div>
</template>

<script>
import {ref,reactive,readonly,isRef,isReactive,isReadonly,isProxy} from 'vue';
export default {
  setup () {
    let num = ref(20);
    let person = reactive({
      cname: 'zhangsan',
      cage: 18
    });
    let person2 = readonly(person);// true
    console.log(isRef(num));// true
    console.log(isReactive(person));// true
    console.log(isReadonly(person2));// true
    console.log(isProxy(person),isProxy(person2));// true true
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
```

## 四、Composition API 的优势

### 1.Options API 存在的问题

使用传统 OptionsAPI 中，新增或者修改一个需求，就需要分别在 data，methods，computed 里修改 。

<div style="width:600px;height:370px;overflow:hidden;float:left">
    <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f84e4e2c02424d9a99862ade0a2e4114~tplv-k3u1fbpfcp-watermark.image" style="width:600px;float:left" />
</div>
<div style="width:300px;height:370px;overflow:hidden;float:left">
    <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5ac7e20d1784887a826f6360768a368~tplv-k3u1fbpfcp-watermark.image" style="zoom:50%;width:560px;left" /> 
</div>

### 2.Composition API 的优势

我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起。

<div style="width:500px;height:340px;overflow:hidden;float:left">
    <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc0be8211fc54b6c941c036791ba4efe~tplv-k3u1fbpfcp-watermark.image"style="height:360px"/>
</div>
<div style="width:430px;height:340px;overflow:hidden;float:left">
    <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6cc55165c0e34069a75fe36f8712eb80~tplv-k3u1fbpfcp-watermark.image"style="height:360px"/>
</div>




























































## 五、新的组件

### 1.Fragment

- 在 Vue2 中: 组件必须有一个根标签
- 在 Vue3 中: 组件可以没有根标签, 内部会将多个标签包含在一个 Fragment 虚拟元素中
- 好处: 减少标签层级, 减小内存占用

### 2.Teleport

- 什么是 Teleport？—— `Teleport` 是一种能够将我们的<strong style="color:#DD5145">组件 html 结构</strong>移动到指定位置的技术。移动位置使用css选择器选择父亲（定位方便了，ui组件库中的popup弹出层就是这样的）

  ```vue
  <teleport
    to="移动位置"
  >	
      <div v-if="isShow" class="mask">
          <div class="dialog">
              <h3>我是一个弹窗</h3>
              <button @click="isShow = false">关闭弹窗</button>
          </div>
      </div>
  </teleport>
  ```

### 3.Suspense

- 等待异步组件时渲染一些额外内容，让应用有更好的用户体验

- 使用步骤：

  - 异步引入组件

    ```js
    import {defineAsyncComponent} from 'vue'
    const Child = defineAsyncComponent(()=>import('./components/Child.vue'))
    ```
  
  - 使用`Suspense`包裹组件，并配置好`default` 与 `fallback`
  
    ```vue
    <template>
      <div class="app">
        <h3>我是App组件</h3>
        <Suspense>
          <template v-slot:default>
            <Child />
          </template>
          <template v-slot:fallback>
            <h3>加载中.....</h3>
          </template>
        </Suspense>
      </div>
    </template>
    ```

## 六、其他

### 1.全局 API 的转移

- Vue 2.x 有许多全局 API 和配置。

  - 例如：注册全局组件、注册全局指令等。

    ```js
    //注册全局组件
    Vue.component('MyButton', {  data: () => ({    count: 0  }),  template: '<button @click="count++">Clicked {{ count }} times.</button>'})
    //注册全局指令
    Vue.directive('focus', {  inserted: el => el.focus()}
    ```

- Vue3.0 中对这些 API 做出了调整：

  - 将全局的 API，即：`Vue.xxx`调整到应用实例（`app`）上

    | 2.x 全局 API（`Vue`）    | 3.x 实例 API (`app`)                        |
    | ------------------------ | ------------------------------------------- |
    | Vue.config.xxxx          | app.config.xxxx                             |
    | Vue.config.productionTip | <strong style="color:#DD5145">移除</strong> |
    | Vue.component            | app.component                               |
    | Vue.directive            | app.directive                               |
    | Vue.mixin                | app.mixin                                   |
    | Vue.use                  | app.use                                     |
    | Vue.prototype            | app.config.globalProperties                 |

### 2.其他改变

- data 选项应始终被声明为一个函数。

- 过度类名的更改：

  - Vue2.x 写法

    ```css
    .v-enter,
    .v-leave-to {
      opacity: 0;
    }
    .v-leave,
    .v-enter-to {
      opacity: 1;
    }
    ```

  - Vue3.x 写法

    ```css
    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }
    .v-leave-from,
    .v-enter-to {
      opacity: 1;
    }
    ```

- <strong style="color:#DD5145">移除</strong>keyCode 作为 v-on 的修饰符，同时也不再支持`config.keyCodes`

- <strong style="color:#DD5145">移除</strong>`v-on.native`修饰符

  - 父组件中绑定事件

    ```vue
    <my-component
      v-on:close="handleComponentEvent"
      v-on:click="handleNativeClickEvent"
    />
    ```

  - 子组件中声明自定义事件

    ```vue
    <script>
    export default { emits: ["close"] };
    </script>
    ```

- <strong style="color:#DD5145">移除</strong>过滤器（filter）

  > 过滤器虽然这看起来很方便，但它需要一个自定义语法，打破大括号内表达式是 “只是 JavaScript” 的假设，这不仅有学习成本，而且有实现成本！建议用方法调用或计算属性去替换过滤器。

- ...... 

## 七、代理服务器

`vite.config.ts`

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/admin": {
        target: "https://api.eveadmin.com",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  }
});
```

## 八、vuex4.0

`yarn add vuex@next`

`main.js`

```js
import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'

createApp(App).use(store).mount('#app')
```

`store.js`

```js
import { createStore } from "vuex";

export default createStore({
  // 严格模式
  strict: true,
  state: {
    //组件中的data
    count: 0
  },
  getters: {
    //vuex4.0没有实现计算属性的功能
    double(state){
      return state.count * 2
    }
  },
  mutations: {
    // “同步”更改状态
    add(state,payload){
      state.count += payload;
    }
  },
  actions: {
    // 可以调用其他的action，或者调用mutations
    asyncAdd(a,payload){
      console.log(a);
      setTimeout(() => {
        a.commit('add',payload);
      }, 2000);
    }
  },
  modules: {}
});
// 在action中更改状态不合法，一般是在action中做逻辑
// 流程：dispatch(action) => commit(mutation) => 修改状态
```

`App.vue`

```html
<template>
  <div>{{count}}</div>
  <div>{{double}}</div>
  <button @click="$store.state.count++">错误修改count+1</button>
  <button @click="add">同步修改</button>
  <button @click="asyncAdd">异步修改</button>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "App",
  setup() {
    const store = useStore();
    console.log(store);
    const add = function(){
      store.commit('add',1);
    }
    const asyncAdd = function(){
      store.dispatch('asyncAdd',2);
    }
    return {
      count: computed(() => {return store.state.count}),
      double: computed(()=>{return store.getters.double}),
      add,
      asyncAdd
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
```

## 九、vue-router4.0

`yarn add vue-router@next`

1. `router-link`,`router-view`与vue2相同
2. 通过调用 `app.use(router)`，我们可以在任意组件中以 `this.$router` 的形式访问它，并且以 `this.$route` 的形式访问当前路由
3. 要在 `setup` 函数中访问路由，请调用 `useRouter` 或 `useRoute` 函数

```html
<script>
import { useRouter, useRoute } from "vue-router";
export default {
  name: "App",
  setup() {
    const route = useRoute();
    const router = useRouter();
    console.log(route,router);
    return {
    };
  }
};
</script>

<template>
  <div>依然可以用this.$route和this.$router获取到路由器和当前路由对象</div>
  <div>{{this.$route}}</div>
  <div :style="{'margin': '50px'}">-----------</div>
  <div>{{this.$router}}</div>
  <router-link to="/">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
  <router-view></router-view>
</template>
```

4. `路由器`

```js
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import About from "../pages/about/About.vue";
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
```

5. 带参数的动态路由匹配

使用带有参数的路由时需要注意的是，当用户从 /users/johnny导航到/users/jolyne时，`相同的组件实例将被重复使用`。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。`不过，这也意味着组件的生命周期钩子不会被调用`。

要对同一个组件中参数的变化做出响应的话，你可以简单地 watch `$route` 对象上的任意属性

或者，使用 `beforeRouteUpdate` [导航守卫](https://next.router.vuejs.org/zh/guide/advanced/navigation-guards.html)，它也可以取消导航

```js
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import About from "../pages/about/About.vue";
import Artice from "../pages/artice/Artice.vue";
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/username/:userid/artice/:articeid",
    component: Artice
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});

```

```html
<script>
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const articeid = ref(0);
    console.log(route, router);
    const gotoArtice = function() {
      router.push("/about");
      console.log(route.params);
    };
    return {
      gotoArtice,
      articeid
    };
  }
};
</script>

<template>
  <div>依然可以用this.$route和this.$router获取到路由器和当前路由对象</div>
  <!-- <div>{{this.$route}}</div> -->
  <div>跳转参数{{this.$route.params}}</div>
  <div>articeid的值为：{{articeid}}</div>
  <button @click="articeid++">articeid + 1</button>
  <div :style="{'margin': '50px'}">-----------</div>
  <!-- <div>{{this.$router}}</div> -->
  <router-link to="/">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
  <router-link :to="'/username/1/artice/' + `${articeid}`">Go to Artice</router-link>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

