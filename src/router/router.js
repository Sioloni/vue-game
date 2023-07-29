import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import TaskGame from "../components/TaskGame.vue";

let router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: HelloWorld,
    },
    {
      name: "Task",
      path: "/:id",
      component: TaskGame,
      props: true,
    },
  ],
});

export default router;
