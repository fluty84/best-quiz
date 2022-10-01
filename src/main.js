import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "./style.css";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Examples from "./Examples.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HelloWorld,
    },
    {
      path: "/examples",
      name: "examples",
      component: Examples,
    },
  ],
});

createApp(App).use(router).mount("#app");
