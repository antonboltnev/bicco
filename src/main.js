import { createApp } from 'vue'
import App from './App.vue'
import "./assets/styles/styles.scss"
import 'material-design-icons-iconfont'
import router from "./router/router";

export const app = createApp(App);

app.use(router);

app.mount('#app');


