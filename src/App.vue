<script setup>

import {RouterView} from 'vue-router';

// import HomePage from './views/HomePage.vue';
import NavigationComponent from './components/Navigation.vue';

</script>

<template>
  <div>
    <NavigationComponent />
    <RouterView />
  </div>
</template>
<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
