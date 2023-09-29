<!-- src/components/HomePage.vue -->
<template>
  <div class="home-page">
    <header>
      <h1>Welcome to My Website</h1>
    </header>
    <main>
      <section class="text-section">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Phasellus sed massa vel augue vehicula ullamcorper. Sed
          ullamcorper justo vitae justo bibendum, non facilisis mi varius.
        </p>
      </section>
      <section class="image-section">
        <img
          src=""
          alt="Sample Image"
        >
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
/* Add your CSS styles here */
.home-page {
  text-align: center;
}

header {
  background-color: #333;
  color: white;
  padding: 20px;
}

main {
  padding: 20px;
}

.text-section {
  margin-bottom: 20px;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
