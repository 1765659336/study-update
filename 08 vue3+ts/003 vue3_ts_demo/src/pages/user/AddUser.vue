<template>
  <a-modal
    title="添加用户"
    :visible="visible"
    @cancel="cancel"
    okText="确定"
    cancelText="取消"
    @ok="handleOk"
  >
    <a-form ref="formRef" :rules="rules" :model="form.user">
      <a-form-item label="用户名" name="name">
        <a-input v-model:value="form.user.name"></a-input>
      </a-form-item>
      <a-form-item label="手机号" name="mobile">
        <a-input v-model:value="form.user.mobile"></a-input>
      </a-form-item>
      <a-form-item label="邮箱" name="email">
        <a-input v-model:value="form.user.email"></a-input>
      </a-form-item>
      <a-form-item label="密码" name="password">
        <a-input v-model:value="form.user.password"></a-input>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRaw } from "vue";
import { addUser } from "../../api/user.ts";
import IUser from "./UserList.vue";
import { message, RuleObject } from "ant-design-vue";
interface IForm {
  user: IUser;
}
export default defineComponent({
  props: {
    visible: Boolean
  },
  emits: {
    cancelAdd: () => true,
    getUserByPage: () => true
  },
  setup(props, ctx) {
    const formRef = ref();
    const form = reactive<IForm>({
      user: {}
    });
    const cancel = () => {
      ctx.emit("cancelAdd");
      form.user = {};
    };
    const handleOk = () => {
      formRef.value
        .validate()
        .then(() => {
          addUser(toRaw(form.user))
            .then((response: any) => {
              // console.log(response.data);
              const { code, msg } = response.data;
              if (code === 0) {
                message.success("新增成功");
                ctx.emit("getUserByPage");
                cancel();
              } else {
                message.error(msg);
              }
            })
            .catch((error: any) => {
              console.log("error", error);
            });
        })
        .catch(() => {});
    };
    const validatePass = async (rule: RuleObject, value: string) => {
      const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (!reg.test(value)) {
        return Promise.reject("邮箱格式不合法");
      } else {
        return Promise.resolve();
      }
    };
    const rules = {
      name: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
      mobile: [{ required: true, message: "电话不能为空", trigger: "blur" }],
      email: [
        { validator: validatePass, trigger: "change" },
        { required: true, message: "邮箱不能为空", trigger: "blur" }
      ],
      password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
    };
    return { cancel, handleOk, rules, formRef, form };
  }
});
</script>

<style scoped>
</style>