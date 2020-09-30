import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Bunnies from "./views/Bunnies.vue";
import Dogs from "./views/Dogs.vue";
import Pet from "./views/Pet.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/bunnies",
      name: "bunnies",
      component: Bunnies,
    },
    {
      path: "/dogs",
      name: "dogs",
      component: Dogs,
    },
    {
      path: "/pets/:species/:id",
      name: "pet",
      component: Pet,
    },
  ],
});
