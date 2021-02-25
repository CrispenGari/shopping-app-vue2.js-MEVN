import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import { Home, Basket } from "../views";
const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/basket", component: Basket, name: "Basket" },
];

const router = new VueRouter({
  routes: routes,
});

export default router;
