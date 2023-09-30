import {createApp} from 'vue';
import App from './App.vue';
import './style.css';

import router from './router/router';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // you can change

const app = createApp(App);

app.use(router);
app.use(Prism);

app.mount('#app');
