<template>
    <div>
      <ul>
        <li v-for="message in messageList" :key="message.id">
          <!-- 路由传参query，字符串写法 -->
          <!-- <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`">{{message.title}}</router-link> -->
          <!-- 路由传参query，对象写法 -->
          <!-- <router-link :to="{
            //path:'/home/message/detail',
            name: 'detailName',
            query: {
              id:message.id,
              title:message.title
            }
          }">
            {{message.title}}
          </router-link> -->
          <!-- 路由传参的字符串写法 -->
            <!-- <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{message.title}}</router-link> -->
            <!-- 路由传参的对象写法 -->
            <!-- !!!!!!!!!!!!!!!!!!有一个坑，使用params的对象形式传递参数的时候，必须要写name而不能写path，不然会报错 -->
            <router-link :to="{
              name:'detailName',
              params:{
                id:message.id,
                title:message.title
              }
            }">{{message.title}}</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  data() {
    return {
      messageList:[
        {id:'001',title:'message001'},
        {id:'002',title:'message002'},
        {id:'003',title:'message003'}
      ]
    }
  },
}
</script>
