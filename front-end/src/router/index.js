import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Historical from "../views/Historical.vue";
import GetStart from "../views/GetStart.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/get-start", name: "GetStart", component: GetStart },
  { path: "/historical", name: "Historical", component: Historical },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
