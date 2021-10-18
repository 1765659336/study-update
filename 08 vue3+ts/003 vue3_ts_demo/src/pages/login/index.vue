<template>
  <div ref="formRef">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
      <a-form-item label="用户名" name="name">
        <a-input v-model:value="admin.name"></a-input>
      </a-form-item>
      <a-form-item label="密码">
        <a-input type="password" v-model:value="admin.password"></a-input>
      </a-form-item>
      <a-button type="primary" @click="onSubmit">Create</a-button>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { login } from "../../api/login";
import { add } from "../../utils/storage";
import { message } from 'ant-design-vue';
import { useRouter } from "vue-router";
interface IAdmin {
  name: string;
  password: string;
}

export default defineComponent({
  setup() {
    const formRef = ref();
    const admin = reactive<IAdmin>({
      name: "",
      password: ""
    });
    const rules = {
      name: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur"
        },
        { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" }
      ]
    };
    const router = useRouter();

    const onSubmit = function() {
      console.log(admin.name, admin.password);
      console.log(formRef.value);
      login(admin)
        .then(response => {
          if (response.status === 200) {
            const { token } = response.data.data;
            console.log(token);
            add("token", token);
            message.info(response.data.msg);
            router.push('/');
          } else {
            console.log("请求失败");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
    return {
      formRef,
      admin,
      onSubmit,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      rules
    };
  }
});
</script>

<style scoped>
</style>