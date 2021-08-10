<template>
    <div>
      <ul>
        <li v-for="message in messageList" :key="message.id">
          <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`">{{message.title}}</router-link>
          <button @click="pushBtn(message)">push查看</button>
          <button @click="replaceBtn(message)">replace查看</button>
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
  methods: {
    pushBtn(message){
      this.$router.push({
        name:'detailName',
        query:{
          id:message.id,
          title:message.title
        }
      })
    },
    replaceBtn(message){
      this.$router.replace({
        name:'detailName',
        query:{
          id:message.id,
          title:message.title
        }
      })
    },
  }
}
</script>
