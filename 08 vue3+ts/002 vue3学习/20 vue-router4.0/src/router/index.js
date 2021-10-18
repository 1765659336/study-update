import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import About from "../pages/about/About.vue";
import Artice from "../pages/artice/Artice.vue";
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/username/:userid/artice/:articeid",
    component: Artice
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
