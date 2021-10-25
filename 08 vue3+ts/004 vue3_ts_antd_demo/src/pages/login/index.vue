<template>
  <div>
    <a-form
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      :rules="rules"
      :model="admin"
      ref="formRef"
    >
      <a-form-item label="用户名" name="name">
        <a-input v-model:value="admin.name"></a-input>
      </a-form-item>
      <a-form-item label="密码" name="password">
        <a-input type="password" v-model:value="admin.password"></a-input>
      </a-form-item>
      <a-button type="primary" @click="onSubmit">登录</a-button>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRaw } from "vue";
import { login } from "../../api/login";
import { add } from "../../utils/storage";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
interface IAdmin {
  name: string;
  password: string;
}

export default defineComponent({
  name: "login",
  setup() {
    // message.info("寒云老师我爱你");
    const formRef = ref();
    const router = useRouter();
    const admin = reactive<IAdmin>({
      name: "",
      password: ""
    });

    const rules = {
      name: [{ required: true, message: "请输入账号", trigger: "blur" }],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }]
    };

    const onSubmit = () => {
      // console.log(admin.name, admin.password);
      // console.log(formRef._value);
      // const a = formRef.value.validate();
      // console.log(a);
      formRef.value
        .validate()
        .then(() => {
          /* 需要将被proxy修饰的对象转换为原始的对象 */
          login(toRaw(admin))
            .then(response => {
              if (response.data.msg === "success") {
                const { token } = response.data.data || "";
                // console.log(token);
                add("token", token);
                message.info(response.data.msg);
                console.log(router);
                router.push("/user");
              } else {
                message.info(response.data.msg);
              }
            })
            .catch(error => {
              console.log("error", error);
            });
        })
        .catch(() => {});
    };
    return {
      formRef,
      admin,
      onSubmit,
      labelCol: { span: 6 },
      wrapperCol: { span: 12 },
      rules,
      router
    };
  }
});
</script>

<style scoped>
</style>