import { createApp } from "vue";
import App from "./App.vue";
import vSelect from "vue-select";

import "./assets/main.css";

createApp(App).component("v-select", vSelect).mount("#app");
