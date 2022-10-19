import { createApp } from "vue";
import App from "./App.vue";
import vSelect from "vue-select";

import "./assets/scss/main.scss";

createApp(App).component("v-select", vSelect).mount("#app");
