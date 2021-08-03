<template>
	<div class="container">
		<Category title="游戏" >
			<!-- scope会接到插槽传递过来的对象，这里使用对象解构的形式接收games -->
			<template scope="{games}">
				<ul><li v-for="(item,index) in games" :key="index">{{item}}</li></ul>
			</template>
		</Category>
		<Category title="游戏" >
			<!-- v-slot会接到插槽传递过来的对象，这里使用对象解构的形式接收games -->
			<template v-slot="{games}">
				<ol><li v-for="(item,index) in games" :key="index">{{item}}</li></ol>
			</template>
		</Category>
		<Category title="游戏" >
			<!-- slot-scope会接到插槽传递过来的对象，这里使用对象解构的形式接收games -->
			<!-- 三种方式都可以接收到，没有什么区别 -->
			<template slot-scope="{games}">
				<p v-for="(item,index) in games" :key="index">{{item}}</p>
			</template>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name:'App',
		components:{Category},
	}
</script>

<style scoped>
	.container {
		display: flex;
		justify-content: space-around;
	}
</style>
