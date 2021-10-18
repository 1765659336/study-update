import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import Login from "../pages/login/index.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: Login
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
