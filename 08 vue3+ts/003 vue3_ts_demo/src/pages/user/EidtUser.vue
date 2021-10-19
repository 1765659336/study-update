<template>
  <a-modal
    :visible="visible"
    title="编辑用户"
    @cancel="cancel"
    okText="保存"
    cancelText="取消"
    @ok="handleOk"
  >
    <a-form ref="formRef" :rules="rules" :model="form.user">
      <a-form-item label="用户名" name="name">
        <a-input v-model:value="form.user.name"></a-input>
      </a-form-item>
      <a-form-item label="邮箱" name="email">
        <a-input v-model:value="form.user.email"></a-input>
      </a-form-item>
      <a-form-item label="手机号" name="mobile">
        <a-input v-model:value="form.user.mobile"></a-input>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
/* 
  使用v-model绑定visible,因为值是从props中接收的，是单向的，但是又使用了v-model单向绑定，因此proxy会没有set方法，报错
*/
import {
  defineComponent,
  PropType,
  ref,
  onBeforeUpdate,
  reactive,
  toRaw
} from "vue";
import { IUser } from "./UserList.vue";
import { message } from "ant-design-vue";
import { updateUser } from "../../api/user";

interface IForm {
  user: IUser;
}
export default defineComponent({
  props: {
    user: {
      type: Object as PropType<IUser>,
      required: true
    },
    visible: Boolean
  },
  emits: {
    cancelEdit: () => true,
    changeUserDom: () => true
  },
  setup(props, ctx) {
    const formRef = ref();
    const cancel = () => {
      message.info("取消编辑");
      ctx.emit("cancelEdit");
    };
    const rules = {
      name: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
      email: [{ required: true, message: "邮箱不能为空", trigger: "blur" }],
      mobile: [{ required: true, message: "电话不能为空", trigger: "blur" }]
    };
    const form = reactive<IForm>({
      user: {} as IUser
    });
    onBeforeUpdate(() => {
      // console.log(props.user);
      form.user = { ...toRaw(props.user) };
      // console.log(form.user);
    });
    const handleOk = () => {
      // console.log(formRef.value.validate());
      formRef.value
        .validate()
        .then(() => {
          updateUser(props.user.id, toRaw(form.user))
            .then(response => {
              // console.log(response.data);
              const { code, msg } = response.data;
              if (code === 0) {
                message.info("编辑成功");
                ctx.emit("cancelEdit");
                ctx.emit("changeUserDom",form.user);
              } else {
                message.error(msg);
              }
            })
            .catch(error => {
              console.log("error", error);
            });
        })
        .catch(() => {});
    };
    return { cancel, form, handleOk, formRef, rules };
  }
});
</script>

<style scoped>
</style>