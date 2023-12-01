import { createApp } from "vue";
import "./style.css";
import router from "./plugins/router";
import App from "./App.vue";

import "primeicons/primeicons.css";

createApp(App).use(router).mount("#app");
