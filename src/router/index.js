import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login";
import Layout from "../components/Layout.vue";
import SubmitWork from "../views/submitWork";
import CorrectWork from "../views/correctWork";

Vue.use(VueRouter);

const routes = [{
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "/submitWork",
        name: "submitWork",
        component: SubmitWork
      },
      {
        path: "/correctWork",
        name: "correctWork",
        component: CorrectWork
      }
    ]
  },



];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;