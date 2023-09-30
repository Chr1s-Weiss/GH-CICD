<script>
import {RouterLink} from 'vue-router';

export default {
  name: 'NavigationComponent',
  components: {RouterLink},
};
</script>


<template>
  <footer :class="$style['footer']">
    <nav :class="$style['nav']">
      <ul :class="$style['navigation']">
        <RouterLink
          :class="$style['center']"
          to="/"
        >
          <img
            :class="$style['nav-icon']"
            src="../assets/icons/home-icon.svg"
            alt=""
          >
          <div :class="$style['nav-item']">
            Home
          </div>
        </RouterLink>
        <RouterLink
          :class="$style['center']"
          to="/DeepDive"
        >
          <img
            :class="$style['nav-icon']"
            src="../assets/icons/diving-mask-icon.svg"
            alt=""
          >
          <div :class="$style['nav-item']">
            DeepDive
          </div>
        </RouterLink>
      </ul>
    </nav>
  </footer>
</template>

<style module>
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--light-green);
}

.nav{
  margin: 0 auto;
  padding: 1rem 0;
  width: 90%;
  max-width: 1440px;
}

.navigation{
  display: flex;
  justify-content: space-evenly;
}

.nav-item{
  font-weight: 600;
  color: black;
}

.nav-icon{
  width: 3rem;
  height: 3rem;
}

.center{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
