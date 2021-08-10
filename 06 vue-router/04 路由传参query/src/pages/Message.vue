<template>
    <div>
      <ul>
        <li v-for="message in messageList" :key="message.id">
          <!-- 路由传参query，字符串写法 -->
          <!-- <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`">{{message.title}}</router-link> -->
          <!-- 路由传参query，对象写法 -->
          <router-link :to="{
            path:'/home/message/detail',
            query: {
              id:message.id,
              title:message.title
            }
          }">
            {{message.title}}
          </router-link>
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
