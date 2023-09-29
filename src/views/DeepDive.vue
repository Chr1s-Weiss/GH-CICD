<template>
  <div class="second-page">
    <h1>Project Documentation</h1>

    <section class="documentation">
      <!-- Documentation content goes here -->
      <h2>Introduction</h2>
      <p>Your project introduction here.</p>

      <!-- Code and shell commands -->
      <div class="code-box">
        <pre><code class="language-javascript">
          // JavaScript code goes here
          const message = 'Hello, World!';
        </code></pre>
      </div>

      <div class="shell-box">
        <pre><code class="language-shell">
          # Shell command goes here
          npm install vue
        </code></pre>
      </div>

      <!-- More documentation sections -->
      <!-- ... -->
    </section>
  </div>
</template>

<script>
export default {
  name: 'SecondPage',
};
</script>

<style scoped>
/* CSS styles for the SecondPage.vue component go here */
.second-page {
  padding: 20px;
}

.documentation {
  margin-top: 20px;
}

/* Styles for code and shell boxes */
.code-box,
.shell-box {
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin: 20px 0;
}
</style>
