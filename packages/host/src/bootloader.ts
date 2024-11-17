import { createApp } from "vue";
import App from "./App.vue";
import router from './router'; // Import your router
import Antd from "ant-design-vue";
import "./index.scss"; // Your global styles

const app = createApp(App);
app.use(router); // Use the router
app.use(Antd); // Use Ant Design
app.mount('#app'); // Mount the app
