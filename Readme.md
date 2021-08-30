## Vue.config



###  Vue.config.productionTip = false;

`阻止vue在启动时产生生产提示`



### Vue.config.keyCodes.huiche = 13

 `定义一个别名按键`



## 模板语法 {{}}

`{{undefined}}Vue解析为空，页面上不会展示，所以当值没有展示的时候，要考虑自己的值是不是undefined`



### 其中不能写ifwhile等逻辑判断式

```html
//有个限制就是，每个绑定都只能包含单个表达式，所以下面的例子都不会生效。
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}

<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```



### 插值语法

插值语法是用来给标签内容解析js表达式的



### 指令语法

指令语法是用来给标签属性解析js表达式的

```html
<body>
	<div id="root">
        <!-- 模板语法分为插值语法和指令语法，vue实例中的所有东西都可以在其绑定的节点中直接使用 -->
        <!-- 其中不能写ifwhile等逻辑判断式 -->
        <!-- 插值语法是用来给标签内容解析js表达式的 -->
        <h1>插值语法</h1>
        <span>hello,{{who}}</span>
        <!-- 指令语法是用来给标签属性解析js表达式的 -->
    	<h1>指令语法</h1>
    	<a :href="url">百度一下</a>
	</div>
	<script src="../vue.js"></script>
	<script>
        // 阻止vue在启动时产生生产提示
        Vue.config.productionTip = false;
        new Vue({
          el: '#root',
          data: {
            who:'world',
            url:'http://www.baidu.com'
          }
        })
	</script>
</body>
```



## v-?



### 数据绑定v-bind v-model

双向数据绑定在绑定数据上比单向数据绑定好，那么为什么不都用v-model呢？因为`v-model只能作用到表单 <input>、<textarea> 及 <select>元素上`

双向数据绑定v-model:value可以简写为v-model，因为v-model默认就是绑定value属性的值

```html
<body>
  <script src="../vue.js"></script>
  <script>
    Vue.config.productionTip = false;
  </script>
  <div id="root">
    单向数据绑定：<input type="text" v-bind:value="value">
    <br>
    双向数据绑定：<input type="text" v-model:value="value">
    <br>
    <!-- 双向数据绑定在绑定数据上比单向数据绑定好，那么为什么不都用v-model呢？因为v-model只能作用到表单元素上 -->
    <!-- 双向数据绑定v-model:value可以简写为v-model，因为v-model默认就是绑定value属性的值 -->
    单向数据绑定简写：<input type="text" :value="value">
    <br>
    双向数据绑定简写：<input type="text" v-model="value">
  </div>
  <script>
    new Vue({
      el: '#root',
      data: {
        value: 'hahaha'
      }
    })
  </script>
</body>
```



#### 绑定样式 v-bind



##### class样式

​        写法:class="xxx"  `xxx可以是字符串、对象、数组`。

​          字符串写法适用于：类名不确定，要动态获取。

​          对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。

​          数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。



##### style样式

​        :style="{fontSize: xxx}"其中 `xxx是动态值`。

​        :style="[a,b]"其中`a、b是样式对象`。

```html
<style>
    .basic{
        width: 400px;
        height: 100px;
        border: 1px solid black;
    }

    .happy{
        border: 4px solid red;;
        background-color: rgba(255, 255, 0, 0.644);
        background: linear-gradient(30deg,yellow,pink,orange,yellow);
    }
    .sad{
        border: 4px dashed rgb(2, 197, 2);
        background-color: gray;
    }
    .normal{
        background-color: skyblue;
    }

    .atguigu1{
        background-color: yellowgreen;
    }
    .atguigu2{
        font-size: 30px;
        text-shadow:2px 2px 10px red;
    }
    .atguigu3{
        border-radius: 20px;
    }
</style>
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 -->
        <div class="basic" :class="mood" @click="changeMood">{{name}}</div> <br/><br/>

        <!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定 -->
        <div class="basic" :class="classArr">{{name}}</div> <br/><br/>

        <!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 -->
        <div class="basic" :class="classObj">{{name}}</div> <br/><br/>

        <!-- 绑定style样式--对象写法 -->
        <div class="basic" :style="styleObj">{{name}}</div> <br/><br/>
        <!-- 绑定style样式--数组写法 -->
        <div class="basic" :style="styleArr">{{name}}</div>
    </div>
</body>
<script type="text/javascript" src="../vue.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false

    const vm = new Vue({
        el:'#root',
        data:{
            name:'尚硅谷',
            mood:'normal',
            classArr:['atguigu1','atguigu2','atguigu3'],
            classObj:{
                atguigu1:false,
                atguigu2:false,
            },
            styleObj:{
                fontSize: '40px',
                color:'red',
            },
            styleObj2:{
                backgroundColor:'orange'
            },
            styleArr:[
                {
                    fontSize: '40px',
                    color:'blue',
                },
                {
                    backgroundColor:'gray'
                }
            ]
        },
        methods: {
            changeMood(){
                const arr = ['happy','sad','normal']
                const index = Math.floor(Math.random()*3)
                this.mood = arr[index]
            }
        },
    })
</script>
```



#### 收集表单数据 v-model

​     若：<input type="text"/>，则v-model收集的是value值，用户输入的就是value值。

​     若：<input type="radio"/>，则v-model收集的是value值，且要给标签配置value值。

​     若：<input type="checkbox"/>

​       1.没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）

​       2.配置input的value属性:

​         (1)v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）

​         (2)v-model的初始值是数组，那么收集的的就是value组成的数组

​     备注：v-model的三个修饰符：

​         lazy：失去焦点再收集数据

​         number：输入字符串转为有效的数字

​         trim：输入首尾空格过滤

```html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <form @submit.prevent="demo">
            <!-- 去掉前后的空格 -->
            账号：<input type="text" v-model.trim="userInfo.account"> <br/><br/>
            密码：<input type="password" v-model="userInfo.password"> <br/><br/>
            <!-- 第一个number限制输入的时候只能输入数字，第二个number将表单收集的字符转换为number类型 -->
            年龄：<input type="number" v-model.number="userInfo.age"> <br/><br/>
            性别：
            男<input type="radio" name="sex" v-model="userInfo.sex" value="male">
            女<input type="radio" name="sex" v-model="userInfo.sex" value="female"> <br/><br/>
            爱好：
            学习<input type="checkbox" v-model="userInfo.hobby" value="study">
            打游戏<input type="checkbox" v-model="userInfo.hobby" value="game">
            吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat">
            <br/><br/>
            所属校区
            <select v-model="userInfo.city">
                <option value="">请选择校区</option>
                <option value="beijing">北京</option>
                <option value="shanghai">上海</option>
                <option value="shenzhen">深圳</option>
                <option value="wuhan">武汉</option>
            </select>
            <br/><br/>
            其他信息：
            <!-- lazy失去焦点再将值传给vue -->
            <textarea v-model.lazy="userInfo.other"></textarea> <br/><br/>
            <input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="http://www.atguigu.com">《用户协议》</a>
            <button>提交</button>
        </form>
    </div>
</body>
<script type="text/javascript" src="../vue.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false

    new Vue({
        el:'#root',
        data:{
            userInfo:{
                account:'',
                password:'',
                age:18,
                sex:'female',
                hobby:[],
                city:'beijing',
                other:'',
                agree:''
            }
        },
        methods: {
            demo(){
                console.log(JSON.stringify(this.userInfo))
            }
        }
    })
</script>
```





### 事件绑定v-on

1. 使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；
2.  事件的回调需要配置在methods对象中，最终会在vm上；可以放在data中，但是会增加vue的压力，因为data中的数据vue会进行数据代理和数据劫持
3. methods中配置的函数，`不要用箭头函数`！否则this就不是vm了；
4.  methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象；
5. @click="demo" 和 @click="demo($event)" 效果一致，但`后者可以传自己的参数，事件触发的时候，vue会自动将event传入`；

````html
<body>
    <script type="text/javascript" src="../vue.js"></script>
    <!-- 准备好一个容器-->
    <div id="root">
      <h2>欢迎来到{{ name }}学习</h2>
      <!-- <button v-on:click="showInfo">点我提示信息</button> -->
      <button @click="showInfo1">点我提示信息1（不传参）</button>
      <button @click="showInfo2($event,66)">点我提示信息2（传参）</button>
    </div>

    <script type="text/javascript">
      Vue.config.productionTip = false; //阻止 vue 在启动时生成生产提示。

      const vm = new Vue({
        el: "#root",
        data: {
          name: "尚硅谷"
        },
        methods: {
          showInfo1(event) {
            // console.log(event.target.innerText)
            // console.log(this) //此处的this是vm
            alert("同学你好！");
          },
          showInfo2(event, number) {
            console.log(event, number);
            // console.log(event.target.innerText)
            console.log(this); //此处的this是vm
            alert("同学你好！！");
          },
       	  // showInfo2:(event, number) => {
          //   console.log(event, number);
          //   console.log(this); //此处的this是这个Vue实例创建所在的作用域中的this，在这其实就是window
          //   alert("同学你好！！");
          // },
        }
      });
    </script>
  </body>
````



#### 事件修饰符

1. prevent：阻止默认事件（常用）；

2. stop：阻止事件冒泡（常用）；

3. once：事件只触发一次（常用）；

4. capture：使用事件的捕获模式；

5. self：只有event.target是当前操作的元素时才触发事件；

6. passive：事件的默认行为立即执行，无需等待事件回调执行完毕；

```html
<style>
    *{
        margin-top: 20px;
    }
    .demo1{
        height: 50px;
        background-color: skyblue;
    }
    .box1{
        padding: 5px;
        background-color: skyblue;
    }
    .box2{
        padding: 5px;
        background-color: orange;
    }
    .list{
        width: 200px;
        height: 200px;
        background-color: peru;
        overflow: auto;
    }
    li{
        height: 100px;
    }
</style>
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <h2>欢迎来到{{name}}学习</h2>
        <!-- 阻止默认事件（常用） -->
        <a href="http://www.atguigu.com" @click.prevent="showInfo">点我提示信息</a>

        <!-- 阻止事件冒泡（常用） -->
        <div class="demo1" @click="showInfo">
            <button @click.stop="showInfo">点我提示信息</button>
            <!-- 修饰符可以连续写 -->
            <!-- <a href="http://www.atguigu.com" @click.prevent.stop="showInfo">点我提示信息</a> -->
        </div>

        <!-- 事件只触发一次（常用） -->
        <button @click.once="showInfo">点我提示信息</button>

        <!-- 使用事件的捕获模式 -->
        <div class="box1" @click.capture="showMsg(1)">
            div1
            <div class="box2" @click="showMsg(2)">
                div2
            </div>
        </div>

        <!-- 只有event.target是当前操作的元素时才触发事件； -->
        <div class="demo1" @click.self="showInfo">
            <button @click="showInfo">点我提示信息</button>
        </div>

        <!-- 事件的默认行为立即执行，无需等待事件回调执行完毕； -->
        <ul @wheel.passive="demo" class="list">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>

    </div>
</body>
<script type="text/javascript" src="../vue.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    new Vue({
        el:'#root',
        data:{
            name:'尚硅谷'
        },
        methods:{
            showInfo(e){
                alert('同学你好！')
                // console.log(e.target)
            },
            showMsg(msg){
                console.log(msg)
            },
            demo(){
                for (let i = 0; i < 100000; i++) {
                    console.log('#')
                }
                console.log('累坏了')
            }
        }
    })
</script>
```



#### 键盘事件

1. Vue中常用的按键别名：`一般配合keyup使用`

​       回车 => enter

​       删除 => delete (捕获“删除”和“退格”键)

​       退出 => esc

​       空格 => space

​       换行 => tab (特殊，必须配合keydown去使用)

​       上 => up

​       下 => down

​       左 => left

​       右 => right

2. Vue未提供别名的按键，可以使用按键原始的key值去绑定，但`注意要转为kebab-case（短横线命名）不要写成驼峰的形式`

3. 系统修饰键`（用法特殊）`：ctrl、alt、shift、meta

​       (1).配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。

​       (2).配合keydown使用：正常触发事件。

4. 也可以使用keyCode去指定具体的按键（`不推荐，不同的键盘编码不统一，已经快要被废除了`）

5. Vue.config.keyCodes.自定义键名 = 键码，可以去`定制按键别名`

```html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <h2>欢迎来到{{name}}学习</h2>
        <!-- <input type="text" placeholder="按下回车提示输入" @keydown.enter="showInfo"> -->
        <!-- 将键盘名称写成xx-xx的形式，不要写成驼峰的形式 -->
        <!-- <input type="text" placeholder="按下回车提示输入" @keydown.caps-lock="showInfo"> -->
        <!-- <input type="text" placeholder="按下回车提示输入" @keydown.13="showInfo"> -->
        <input type="text" placeholder="按下回车提示输入" @keydown.huiche="showInfo">
    </div>
</body>
<script type="text/javascript" src="../vue.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
    Vue.config.keyCodes.huiche = 13 //定义了一个别名按键

    new Vue({
        el:'#root',
        data:{
            name:'尚硅谷'
        },
        methods: {
            showInfo(e){
                // console.log(e.key,e.keyCode)
                console.log(e.target.value)
            }
        },
    })
</script>
```



### 条件渲染v-if v-show



#### v-if

​            (1).v-if="表达式" 

​            (2).v-else-if="表达式"

​            (3).v-else="表达式"

​          适用于：切换频率较低的场景。

​          特点：不展示的DOM元素`直接被移除`。

​          注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被“打断”。`效率比全都是v-if效率高`



#### v-show

​          写法：v-show="表达式"

​          适用于：`切换频率较高的场景`。

​          特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉`display:none；`



`v-if与template的配合使用，template不能与v-show配合使用，template渲染的时候会消失，不占有页面节点`

```html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <h2>当前的n值是:{{n}}</h2>
        <button @click="n++">点我n+1</button>
        <!-- 使用v-show做条件渲染 -->
        <!-- <h2 v-show="false">欢迎来到{{name}}</h2> -->
        <!-- <h2 v-show="1 === 1">欢迎来到{{name}}</h2> -->

        <!-- 使用v-if做条件渲染 -->
        <!-- <h2 v-if="false">欢迎来到{{name}}</h2> -->
        <!-- <h2 v-if="1 === 1">欢迎来到{{name}}</h2> -->

        <!-- v-else和v-else-if是一组判断，效率比全都是v-if效率高 -->
        <!-- <div v-if="n === 1">Angular</div>
		<div v-else-if="n === 2">React</div>
        <div v-else-if="n === 3">Vue</div>
		<div v-else>哈哈</div> -->

        <!-- v-if与template的配合使用，template不能与v-show配合使用，template渲染的时候会消失，不占有页面节点 -->
        <template v-if="n === 1">
            <h2>你好</h2>
            <h2>尚硅谷</h2>
            <h2>北京</h2>
        </template>

    </div>
</body>

<script type="text/javascript" src="../vue.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false

    const vm = new Vue({
        el:'#root',
        data:{
            name:'尚硅谷',
            n:0
        }
    })
</script>
```



### 列表渲染v-for

1. 用于展示列表数据

2. 语法：v-for="(item, index) in xxx" :key="yyy"

3. 可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）

```html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <!-- 遍历数组 -->
        <h2>人员列表（遍历数组）</h2>
        <ul>
            <li v-for="(p,index) of persons" :key="index">
                {{p.name}}-{{p.age}}
            </li>
        </ul>

        <!-- 遍历对象 -->
        <h2>汽车信息（遍历对象）</h2>
        <ul>
            <li v-for="(value,k) of car" :key="k">
                {{k}}-{{value}}
            </li>
        </ul>

        <!-- 遍历字符串 -->
        <h2>测试遍历字符串（用得少）</h2>
        <ul>
            <li v-for="(char,index) of str" :key="index">
                {{char}}-{{index}}
            </li>
        </ul>

        <!-- 遍历指定次数 -->
        <h2>测试遍历指定次数（用得少）</h2>
        <ul>
            <li v-for="(number,index) of 5" :key="index">
                {{index}}-{{number}}
            </li>
        </ul>
    </div>
    <script type="text/javascript" src="../vue.js"></script>
    <script type="text/javascript">
        Vue.config.productionTip = false

        new Vue({
            el:'#root',
            data:{
                persons:[
                    {id:'001',name:'张三',age:18},
                    {id:'002',name:'李四',age:19},
                    {id:'003',name:'王五',age:20}
                ],
                car:{
                    name:'奥迪A8',
                    price:'70万',
                    color:'黑色'
                },
                str:'hello'
            }
        })
    </script>
```



#### key的原理

react、vue中的key有什么作用？（key的内部原理）

1. 虚拟DOM中key的作用：

​          key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】, 

​          随后Vue进行`【新虚拟DOM】与【旧虚拟DOM】的差异比较`，比较规则如下：        

2. 对比规则：

​         (1).旧虚拟DOM中找到了与新虚拟DOM相同的key：

​            ①.`若虚拟DOM中内容没变, 直接使用之前的真实DOM`！

​            ②.`若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM`。

​         (2).旧虚拟DOM中未找到与新虚拟DOM相同的key

​            创建新的真实DOM，随后渲染到到页面。            

3. `用index作为key`可能会引发的问题：

      \1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:

​               会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

​           \2. 如果结构中还包含输入类的DOM：

​               会产生错误DOM更新 ==> 界面有问题。

4. 开发中如何选择key?:

​           1.`最好使用每条数据的唯一标识作为key`, 比如`id、手机号、身份证号、学号等唯一值`。

​           2.如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，

​            使用index作为key是没有问题的。

```html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <!-- 遍历数组 -->
        <h2>人员列表（遍历数组）</h2>
        <button @click.once="add">添加一个老刘</button>
        <ul>
            <li v-for="(p,index) of persons" :key="index">
                {{p.name}}-{{p.age}}
                <input type="text">
            </li>
        </ul>
    </div>
    <script type="text/javascript" src="../js/vue.js"></script>
    <script type="text/javascript">
        Vue.config.productionTip = false

        new Vue({
            el:'#root',
            data:{
                persons:[
                    {id:'001',name:'张三',age:18},
                    {id:'002',name:'李四',age:19},
                    {id:'003',name:'王五',age:20}
                ]
            },
            methods: {
                add(){
                    const p = {id:'004',name:'老刘',age:40}
                    this.persons.unshift(p)
                }
            },
        })
    </script>
```



#### 列表过滤

```html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <h2>人员列表</h2>
        <input type="text" placeholder="请输入名字" v-model="keyWord">
        <ul>
            <li v-for="(p,index) of filPerons" :key="index">
                {{p.name}}-{{p.age}}-{{p.sex}}
            </li>
        </ul>
    </div>
    <script type="text/javascript" src="../vue.js"></script>
    <script type="text/javascript">
        Vue.config.productionTip = false

        //用watch实现
        //#region 
        /* new Vue({
				el:'#root',
				data:{
					keyWord:'',
					persons:[
						{id:'001',name:'马冬梅',age:19,sex:'女'},
						{id:'002',name:'周冬雨',age:20,sex:'女'},
						{id:'003',name:'周杰伦',age:21,sex:'男'},
						{id:'004',name:'温兆伦',age:22,sex:'男'}
					],
					filPerons:[]
				},
				watch:{
					keyWord:{
						// indexOf匹配的时候，当用''空去匹配字符串的时候，也可以匹配的到都为0，而不是-1。因
						// 此在此处先调用一次就能将数据全部展示,不需要将filPerons赋值为原数组
						immediate:true,
						handler(val){
							this.filPerons = this.persons.filter((p)=>{
								return p.name.indexOf(val) !== -1
							})
						}
					}
				}
			}) */
        //#endregion

        //用computed实现
        new Vue({
            el:'#root',
            data:{
                keyWord:'',
                persons:[
                    {id:'001',name:'马冬梅',age:19,sex:'女'},
                    {id:'002',name:'周冬雨',age:20,sex:'女'},
                    {id:'003',name:'周杰伦',age:21,sex:'男'},
                    {id:'004',name:'温兆伦',age:22,sex:'男'}
                ]
            },
            computed:{
                // 计算属性依赖了keyWord，当keyWord的值发生改变时，get回调函数会被调用
                filPerons(){
                    return this.persons.filter((p)=>{
                        return p.name.indexOf(this.keyWord) !== -1
                    })
                }
            }
        }) 
    </script>
</body>
```

#### 列表排序

```html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <h2>人员列表</h2>
        <input type="text" placeholder="请输入名字" v-model="keyWord" />
        <button @click="sortType = 2">年龄升序</button>
        <button @click="sortType = 1">年龄降序</button>
        <button @click="sortType = 0">原顺序</button>
        <ul>
            <li v-for="(p,index) of filPerons" :key="p.id">
                {{ p.name }}-{{ p.age }}-{{ p.sex }}
                <input type="text" />
            </li>
        </ul>
    </div>
    <script type="text/javascript" src="../vue.js"></script>
    <script type="text/javascript">
        Vue.config.productionTip = false;

        new Vue({
            el: "#root",
            data: {
                keyWord: "",
                sortType: 0, //0原顺序 1降序 2升序
                persons: [
                    { id: "001", name: "马冬梅", age: 30, sex: "女" },
                    { id: "002", name: "周冬雨", age: 31, sex: "女" },
                    { id: "003", name: "周杰伦", age: 18, sex: "男" },
                    { id: "004", name: "温兆伦", age: 19, sex: "男" }
                ]
            },
            computed: {
                filPerons() {
                    const arr = this.persons.filter(p => {
                        return p.name.indexOf(this.keyWord) !== -1;
                    });
                    //判断一下是否需要排序
                    if (this.sortType) {
                        arr.sort((p1, p2) => {
                            return this.sortType === 1 ? p2.age - p1.age : p1.age - p2.age;
                        });
                    }
                    return arr;
                }
            }
        });
    </script>
</body>
```



### v-text

1. 作用：向其所在的节点中渲染文本内容。会替换掉节点中的`所有文本内容`

2. 与插值语法的区别：v-text会替换掉节点中的内容，{{xx}}则不会。

````html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <div>你好，{{name}}</div>
        <div v-text="name"></div>
        <div v-text="str"></div>
    </div>
</body>
<script type="text/javascript" src="../vue.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    new Vue({
        el:'#root',
        data:{
            name:'尚硅谷',
            str:'<h3>你好啊！</h3>'
        }
    })
</script>
````



## Vue.?



### set()

`为后面添加的属性追加响应式`

```html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <h1>学校信息</h1>
        <h2>学校名称：{{school.name}}</h2>
        <h2>学校地址：{{school.address}}</h2>
        <h2>校长是：{{school.leader}}</h2>
        <hr/>
        <h1>学生信息</h1>
        <button @click="addSex">添加一个性别属性，默认值是男</button>
        <!-- Vue不会将underfined展示在页面上 -->
        <h2>姓名：{{student.name}}</h2>
        <h2 v-if="student.sex">性别：{{student.sex}}</h2>
        <h2>年龄：真实{{student.age.rAge}}，对外{{student.age.sAge}}</h2>
        <h2>朋友们</h2>
        <ul>
            <li v-for="(f,index) in student.friends" :key="index">
                {{f.name}}--{{f.age}}
            </li>
        </ul>
    </div>
</body>
<script type="text/javascript" src="../vue.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    const vm = new Vue({
        el:'#root',
        data:{
            school:{
                name:'尚硅谷',
                address:'北京',
            },
            student:{
                name:'tom',
                age:{
                    rAge:40,
                    sAge:29,
                },
                friends:[
                    {name:'jerry',age:35},
                    {name:'tony',age:36}
                ]
            }
        },
        methods: {
            addSex(){
                this.$set(this.student,'sex','男')
                // Vue.set(this.student,'sex','男')
            }
        }
    })
</script>
```





## vm.$?



### $mount()

```html
<body>
  <script src="../vue.js"></script>
  <script>
    Vue.config.productionTip = false;
  </script>
  <div id="root">
    {{value}}
  </div>
  <script>
    const v = new Vue({
      el: '#root',
      data(){
        return {
          value: 'hahaha'
        }
      }
    })
    v.$mount('#root')
  </script>
</body>
```

### $watch()

```html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <h2>今天天气很{{info}}</h2>
        <button @click="changeWeather">切换天气</button>
    </div>
</body>
<script type="text/javascript" src="../vue.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    const vm = new Vue({
        el:'#root',
        data:{
            isHot:true,
        },
        computed:{
            info(){
                return this.isHot ? '炎热' : '凉爽'
            }
        },
        methods: {
            changeWeather(){
                this.isHot = !this.isHot
            }
        },
    })

    vm.$watch('isHot',{
        immediate:true, //初始化时让handler调用一下
        //handler什么时候调用？当isHot发生改变时。
        handler(newValue,oldValue){
            console.log('isHot被修改了',newValue,oldValue)
        }
    })
    
    //简写 当只有handler的时候
    /* vm.$watch('isHot',(newValue,oldValue)=>{
			console.log('isHot被修改了',newValue,oldValue,this)
		}) */
</script>
```



### $set()

`为后面添加的属性追加响应式`

```html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <h1>学校信息</h1>
        <h2>学校名称：{{school.name}}</h2>
        <h2>学校地址：{{school.address}}</h2>
        <h2>校长是：{{school.leader}}</h2>
        <hr/>
        <h1>学生信息</h1>
        <button @click="addSex">添加一个性别属性，默认值是男</button>
        <!-- Vue不会将underfined展示在页面上 -->
        <h2>姓名：{{student.name}}</h2>
        <h2 v-if="student.sex">性别：{{student.sex}}</h2>
        <h2>年龄：真实{{student.age.rAge}}，对外{{student.age.sAge}}</h2>
        <h2>朋友们</h2>
        <ul>
            <li v-for="(f,index) in student.friends" :key="index">
                {{f.name}}--{{f.age}}
            </li>
        </ul>
    </div>
</body>
<script type="text/javascript" src="../vue.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    const vm = new Vue({
        el:'#root',
        data:{
            school:{
                name:'尚硅谷',
                address:'北京',
            },
            student:{
                name:'tom',
                age:{
                    rAge:40,
                    sAge:29,
                },
                friends:[
                    {name:'jerry',age:35},
                    {name:'tony',age:36}
                ]
            }
        },
        methods: {
            addSex(){
                // Vue.set(this.student,'sex','男')
                this.$set(this.student,'sex','男')
            }
        }
    })
</script>
```



## Vue({})



### Vue({el})

提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 `CSS 选择器`，也可以是`一个 HTMLElement 实例（不常用）`。



### Vue({data})

`data有两种写法对象式和函数式`

注意`不要写成箭头函数`，不然this指向就不是vue实例或组件，vue实例其实也可以理解为一个组件

```html
<body>
  <script src="../vue.js"></script>
  <div id="root">
    <span>hello,{{who}}</span>
  </div>
  <script>
    // 阻止vue在启动时产生生产提示
    Vue.config.productionTip = false;
  </script>
  <script>
    new Vue({
      el: '#root',
      // 对象式
      /* data: {
        who:'world',
      } */
      // 函数式 注意不要写出箭头函数，不然this指向就不是vue实例或组件，vue实例其实也可以理解为一个组件
      data(){
        return {
            who:'world',
        }
    }
    })
  </script>
</body>
```



### Vue({computed})

1. 定义：`要用的属性不存在，要通过已有属性计算得来`。

2. 原理：底层借助了Objcet.defineproperty方法提供的getter和setter。

3. get函数什么时候执行？

​        (1).初次读取时会执行一次。

​        (2).`当依赖的数据发生改变时会被再次调用`。

4. 优势：`与methods实现相比，内部有缓存机制（复用），效率更高，调试方便`

5. 备注：

​       1.计算属性最终会出现在vm上，"直接读取"使用即可。

​       2.`如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变`。

​		3.一些简单的计算属性，且后续不需要修改时，可以直接使用模板语法，但是从代码规范来说不推荐，不要在结构中书写过多的js代码

```html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        姓：<input type="text" v-model="firstName"> <br/><br/>
        名：<input type="text" v-model="lastName"> <br/><br/>
        测试：<input type="text" v-model="x"> <br/><br/>
        全名：<span>{{fullName}}</span> <br/>
    </div>
</body>
<script type="text/javascript" src="../vue.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    const vm = new Vue({
        el:'#root',
        data:{
            firstName:'张',
            lastName:'三',
            x:'你好'
        },
        // 计算属性：拿data中的属性处理之后形成新的属性
        computed:{
            fullName:{
                //get有什么作用？当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
                //get会有缓存，当再次读取时，所依赖的数据没有发生变化，则不会再调用get()
                //get什么时候调用？1.初次读取fullName时。2.所依赖的数据发生变化时。
                get(){
                    console.log('get被调用了')
                    // console.log(this) //此处的this是vm
                    return this.firstName + '-' + this.lastName + this.x
                },
                //set不是一定要的，当仅仅只是展示时，不会调用。set什么时候调用? 当fullName被修改时。vm.fullName = 'xxx',一般会写在函数中，this指向为vm所以会this.fullName = 'xxx'
                set(value){
                    console.log('set',value)
                    const arr = value.split('-')
                    this.firstName = arr[0]
                    this.lastName = arr[1]
                }
            },
            //简写的前提，没有set，只有get
            /* fullName(){
                console.log('get被调用了')
                return this.firstName + '-' + this.lastName + this.x
            } */
        }
    })
</script>
```



### Vue({methods})

`切记不要写成箭头函数就好`

```html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        姓：<input type="text" v-model="firstName"> <br/><br/>
        名：<input type="text" v-model="lastName"> <br/><br/>
        全名：<span>{{fullName()}}</span>
    </div>
</body>
<!-- 引入Vue -->
<script type="text/javascript" src="../vue.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    new Vue({
        el:'#root',
        data:{
            firstName:'张',
            lastName:'三'
        },
        methods: {
            fullName(){
                console.log('@---fullName')
                return this.firstName + '-' + this.lastName
            }
        },
    })
</script>
```



### Vue({watch})

1. 当被监视的属性变化时, 回调函数自动调用, 进行相关操作

2. 监视的属性必须存在，才能进行监视！！

3. 监视的两种写法：

​       (1).new Vue时传入watch配置

​       (2).通过vm.$watch监视

4. 监视属性可以监听data中的属性，也可以监视计算属性

```html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <h2>今天天气很{{info}}</h2>
        <button @click="changeWeather">切换天气</button>
    </div>
</body>
<script type="text/javascript" src="../vue.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    const vm = new Vue({
        el:'#root',
        data:{
            isHot:true,
        },
        computed:{
            info(){
                return this.isHot ? '炎热' : '凉爽'
            }
        },
        methods: {
            changeWeather(){
                this.isHot = !this.isHot
            }
        },
        /* watch:{
				isHot:{
					immediate:true, //初始化时让handler调用一下
					//handler什么时候调用？当isHot发生改变时。
					handler(newValue,oldValue){
						console.log('isHot被修改了',newValue,oldValue)
					}
				}
			} */
    })

    vm.$watch('isHot',{
        immediate:true, //初始化时让handler调用一下
        //handler什么时候调用？当isHot发生改变时。
        handler(newValue,oldValue){
            console.log('isHot被修改了',newValue,oldValue)
        }
    })
</script>
```



#### 深度监视

(1).Vue中的watch默认不监测对象内部值的改变（一层）。
(2).配置`deep:true`监测对象内部值改变（多层）。
备注：
(1).Vue自身可以监测对象内部值的改变，但`Vue提供的watch默认不可以,需要配置deep:true`
(2).使用watch时根据数据的具体结构，决定是否采用深度监视。

```javascript
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <h2>今天天气很{{info}}</h2>
<button @click="changeWeather">切换天气</button>
<hr/>
            <h3>a的值是:{{numbers.a}}</h3>
<button @click="numbers.a++">点我让a+1</button>
<h3>b的值是:{{numbers.b}}</h3>
<button @click="numbers.b++">点我让b+1</button>
<button @click="numbers = {a:666,b:888}">彻底替换掉numbers</button>
{{numbers.c.d.e}}
</div>
</body>
<script type="text/javascript" src="../vue.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

const vm = new Vue({
    el:'#root',
    data:{
        isHot:true,
        numbers:{
            a:1,
            b:1,
            c:{
                d:{
                    e:100
                }
            }
        }
    },
    computed:{
        info(){
            return this.isHot ? '炎热' : '凉爽'
        }
    },
    methods: {
        changeWeather(){
            this.isHot = !this.isHot
        }
    },
    watch:{
        isHot:{
            // immediate:true, //初始化时让handler调用一下
            //handler什么时候调用？当isHot发生改变时。
            handler(newValue,oldValue){
                console.log('isHot被修改了',newValue,oldValue)
            }
        },
        //监视多级结构中某个属性的变化
        /* 'numbers.a':{
					handler(){
						console.log('a被改变了')
					}
				} */
        //监视多级结构中所有属性的变化
        numbers:{
            deep:true,
            handler(){
                console.log('numbers改变了')
            }
        }
    }
})

</script>
```



#### 监视简写

`当watch中只有handler时候，可以使用简写形式`

```javascript
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <h2>今天天气很{{info}}</h2>
<button @click="changeWeather">切换天气</button>
</div>
</body>
<script type="text/javascript" src="../vue.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

const vm = new Vue({
    el:'#root',
    data:{
        isHot:true,
    },
    computed:{
        info(){
            return this.isHot ? '炎热' : '凉爽'
        }
    },
    methods: {
        changeWeather(){
            this.isHot = !this.isHot
        }
    },
    watch:{
        //正常写法
        /* isHot:{
					// immediate:true, //初始化时让handler调用一下
					// deep:true,//深度监视
					handler(newValue,oldValue){
						console.log('isHot被修改了',newValue,oldValue)
					}
				}, */
        //简写，只有handler的时候
        /* isHot(newValue,oldValue){
					console.log('isHot被修改了',newValue,oldValue,this)
				} */
    }
})

//正常写法
/* vm.$watch('isHot',{
			immediate:true, //初始化时让handler调用一下
			deep:true,//深度监视
			handler(newValue,oldValue){
				console.log('isHot被修改了',newValue,oldValue)
			}
		}) */

//简写
/* vm.$watch('isHot',(newValue,oldValue)=>{
			console.log('isHot被修改了',newValue,oldValue,this)
		}) */

</script>
```



### Vue({filter})过滤器

过滤器：

​    定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。

​    语法：

​      1.`注册过滤器`：`全局过滤器 Vue.filter(name,callback) `或 `局部过滤器 new Vue{filters:{}}`

​      2.`使用过滤器`：`{{ xxx | 过滤器名}} ` 或  `v-bind:属性 = "xxx | 过滤器名"`

​    备注：

​      1.过滤器也`可以接收额外参数`、`多个过滤器也可以串联`

​      2.并`没有改变原本的数据, 是产生新的对应的数据`

```html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <h2>显示格式化后的时间</h2>
        <!-- 计算属性实现 -->
        <h3>现在是：{{fmtTime}}</h3>
        <!-- methods实现 -->
        <h3>现在是：{{getFmtTime()}}</h3>
        <!-- 过滤器实现 -->
        <h3>现在是：{{time | timeFormater}}</h3>
        <!-- 过滤器实现（传参） -->
        <h3>现在是：{{time | timeFormater('YYYY_MM_DD') | mySlice}}</h3>
        <h3 :x="msg | mySlice">尚硅谷</h3>
    </div>

    <div id="root2">
        <h2>{{msg | mySlice}}</h2>
    </div>
</body>
<script type="text/javascript" src="../vue.js"></script>
<script type="text/javascript" src="../dayjs.min.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false
    //全局过滤器,必须写在Vue实例之前
    Vue.filter('mySlice',function(value){
        return value.slice(0,4)
    })

    new Vue({
        el:'#root',
        data:{
            time:1621561377603, //时间戳
            msg:'你好，尚硅谷'
        },
        computed: {
            fmtTime(){
                return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
            }
        },
        methods: {
            getFmtTime(){
                return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
            }
        },
        //局部过滤器
        filters:{
            timeFormater(value,str='YYYY年MM月DD日 HH:mm:ss'){
                // console.log('@',value)
                return dayjs(value).format(str)
            }
        }
    })

    new Vue({
        el:'#root2',
        data:{
            msg:'hello,atguigu!'
        }
    })
</script>
```





## Vue数据代理原理

通过Vue底层通过`Object.defineProperty`帮我们将data中的数据解析到Vue实例

```javascript
let vm = new Vue({...})
```

vm上，可以通过`vm.data里面的属性名`拿到，并且vm实例上还会有对应属性的`getter`和`setter`方法，当我们拿取data中的数据时，vm会帮我们调用getter方法去操作vm._data( _data中进行了数据劫持)拿去数据，当我们修改data中的数据时，vm会帮我们调用setter方法去操作vm._data修改数据，这就是vue的`响应式原理`



## Vue数据监视原理

1. vue会监视data中所有层次的数据。

2. 如何监测对象中的数据？

​        通过setter实现监视，且要在new Vue时就传入要监测的数据。

​         (1).对象中后追加的属性，Vue默认不做响应式处理

​         (2).如需给后添加的属性做响应式，请使用如下API：

​             `Vue.set(target，propertyName/index，value) `或 

​             `vm.$set(target，propertyName/index，value)`

3. 如何监测数组中的数据？

​         通过包裹数组更新元素的方法实现，本质就是做了两件事：

​          (1).调用原生对应的方法对数组进行更新。

​          (2).重新解析模板，进而更新页面。

4. 在`Vue修改数组中的某个元素`一定要用如下方法：

​       1.使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()

​       2.Vue.set() 或 vm.$set()

​    特别注意：`Vue.set() 和 vm.$set() 不能给vm或vm的实例对象添加属性！！！`

```html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
        <h1>学生信息</h1>
        <button @click="student.age++">年龄+1岁</button> <br/>
        <button @click="addSex">添加性别属性，默认值：男</button> <br/>
        <button @click="student.sex = '未知' ">修改性别</button> <br/>
        <button @click="addFriend">在列表首位添加一个朋友</button> <br/>
        <button @click="updateFirstFriendName">修改第一个朋友的名字为：张三</button> <br/>
        <button @click="addHobby">添加一个爱好</button> <br/>
        <button @click="updateHobby">修改第一个爱好为：开车</button> <br/>
        <button @click="removeSmoke">过滤掉爱好中的抽烟</button> <br/>
        <h3>姓名：{{student.name}}</h3>
        <h3>年龄：{{student.age}}</h3>
        <h3 v-if="student.sex">性别：{{student.sex}}</h3>
        <h3>爱好：</h3>
        <ul>
            <li v-for="(h,index) in student.hobby" :key="index">
                {{h}}
            </li>
        </ul>
        <h3>朋友们：</h3>
        <ul>
            <li v-for="(f,index) in student.friends" :key="index">
                {{f.name}}--{{f.age}}
            </li>
        </ul>
    </div>
</body>
<script type="text/javascript" src="../vue.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    const vm = new Vue({
        el:'#root',
        data:{
            student:{
                name:'tom',
                age:18,
                hobby:['抽烟','喝酒','烫头'],
                friends:[
                    {name:'jerry',age:35},
                    {name:'tony',age:36}
                ]
            }
        },
        methods: {
            addSex(){
                // Vue.set(this.student,'sex','男')
                this.$set(this.student,'sex','男')
            },
            addFriend(){
                this.student.friends.unshift({name:'jack',age:70})
            },
            updateFirstFriendName(){
                this.student.friends[0].name = '张三'
            },
            addHobby(){
                this.student.hobby.push('学习')
            },
            updateHobby(){
                // this.student.hobby.splice(0,1,'开车')
                // Vue.set(this.student.hobby,0,'开车')
                this.$set(this.student.hobby,0,'开车')
            },
            removeSmoke(){
                this.student.hobby = this.student.hobby.filter((h)=>{
                    return h !== '抽烟'
                })
            }
        }
    })
</script>
```

