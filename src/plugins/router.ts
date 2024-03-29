import { createRouter, createWebHistory } from "vue-router";
import { Home, TodoApp, About, BookFinder, Shopify } from "@/pages/index";
import KocokArisanVue from "@/pages/KocokArisan.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, name: "home" },
    { path: "/todo-app", component: TodoApp },
    { path: "/about", component: About },
    { path: "/book-finder", component: BookFinder },
    { path: "/shopify", component: Shopify },
    { path: "/kocokarisan", component: KocokArisanVue },
  ],
});

export default router;
