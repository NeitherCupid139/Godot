import { createApp } from "vue";
import App from "./App.vue";
import "../style.scss";
import "@popperjs/core";
import "bootstrap";
import router from "./router/router";
createApp(App).use(router).mount("#app");
