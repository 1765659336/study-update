# vue3+ts demo 练习

## 项目起步

1. 使用 vite 创建项目`yarn create vite <项目名称> --template vue-ts`
2. 配置服务器代理`vite.config.ts`，实现跨域

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/admin": {
        target: "https://api.eveadmin.com",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  }
});
```

3. 安装 antd of vue 组件库`yarn add ant-design-vue@next`

4. 安装 axios`yarn add axios`

5. 安装 vue-router 最新的`yarn add vue-router@next`

6. 安装 vuex 最新的`yarn add vuex@next`

## 注意事项

1. vue3 的 v-model:name 的 name 要和 props 中的 name 一致
2. vue3 中的编程式导航

```js
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    ...
    const router = useRouter();
    const onSubmit = function() {
      router.push("/");
    };
    ...
    return {...};
  }
});
```

3. vue3 中获取 ref 原生 dom

```html
<template>
  <div ref="formRef"></div>
</template>
<script lang="ts">
  export default defineComponent({
    setup() {
      const formRef = ref();
      return {
        formRef
      };
    }
  });
</script>
```
