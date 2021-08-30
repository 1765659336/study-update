export const hunhe1 = {
  data(){
    return {
      str: '混合1中的data'
    }
  },
  methods:{
    btn(){
      console.log('btn');
    }
  },
  mounted() {
    console.log('mounted渲染完成');
  },
}

export const hunhe2 = {
  data(){
    return {
      str2: '混合2中的data'
    }
  }
}

export const globalHunhe = {
  data(){
    return {
      glo: '全局data',
      msg: '全局的msg，冲突了，我显示了吗',
    }
  }
}