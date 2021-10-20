import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import Login from "../pages/login/index.vue";
import UserList from "../pages/user/UserList.vue";
import AppLayout from "../components/AppLayout.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: Login,
    meta: {
      title: "登录",
    }
  },
  {
    path: "/user",
    component: AppLayout,
    meta: {
      title: "用户管理",
    },
    children: [
      {
        path: "/user/list",
        component: UserList,
        meta: {
          title: "用户列表"
        }
      }
    ]
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
