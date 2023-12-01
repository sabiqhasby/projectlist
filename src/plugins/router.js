import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import TodoApp from "@/pages/TodoApp.vue";
import About from "@/pages/About.vue";
import BookFinder from "@/pages/BookFinder.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, name: "home" },
    { path: "/todo-app", component: TodoApp },
    { path: "/about", component: About },
    { path: "/book-finder", component: BookFinder },
  ],
});

export default router;
