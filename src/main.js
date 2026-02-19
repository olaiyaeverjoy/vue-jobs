import { createApp } from 'vue'
import './style.css'
import router from './router';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'


const app = createApp(App);

app.use(router);
app.use(Toast);
app.mount('#app');
