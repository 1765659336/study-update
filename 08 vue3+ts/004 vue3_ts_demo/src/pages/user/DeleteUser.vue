<template>
  <a-popconfirm title="确认删除？" @confirm="deleteUser" @cancel="cancel">
    <a-button type="primary" danger>删除用户</a-button>
  </a-popconfirm>
</template>

<script lang="ts">
import { message } from "ant-design-vue";
import { defineComponent, PropType } from "vue";
import { IUser } from "./UserList.vue";
import {deleteUserByID} from "../../api/user.ts"
import { deleteUserById } from "../../api/user";

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<IUser>,
      required: true
    }
  },
  emits:{
    DeleteUserDom: (user:IUser) => true
  },
  setup(props,ctx) {
    const deleteUser = () => {
      console.log(props.user);
      deleteUserById(props.user.id as number).then((response)=>{
        const {code,msg} = response.data;
        if(code === 0){
          message.success(msg);
          ctx.emit("DeleteUserDom",props.user)
        }else {
          message.error(msg);
        }
      }).catch(()=>{

      })
    }

    const cancel = () => {
      message.info("取消删除")
    }
    return {
      deleteUser,
      cancel
    };
  }
});
</script>

<style scoped>
</style>