// src/router/index.js
import {createRouter} from 'vue-router';
import {createWebHistory} from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import DeepDive from '@/views/DeepDive.vue';

const router = new createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/GH-CICD',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/deepdive',
      name: 'DeepDive',
      component: DeepDive,
    },
  ],
});

export default router;
