<!-- src/components/HomePage.vue -->
<template>
  <div class="home-page">
    <section id="about">
      <div class="container flex">
        <picture class="portrait">
          <img
            src="\public\Picture_Christian.jpg"
            alt="Personal portrait"
          >
        </picture>
        <div class="aboutMe">
          <h2>About Me</h2>
          <p>
            I am a passionate full-stack developer who happens
            to have a strong affinity for running. I thrive on
            challenges and am always looking for new and exciting
            opportunities to push myself both personally and professionally.
            To learn more about me, check out my Linkedin.
          </p>
        </div>
      </div>
      <a href="#profile">
        <img
          style="width: 2rem;"
          src="/public/arrow-down.png"
          alt=""
        ></a>
    </section>
    <section>
      <div class="container">
        <h2 id="profile">
          Christian Weiss
        </h2>
        <div class="flex">
          <div class="col-50">
            <h3>Study</h3>
            <div>
              <p><strong>FH Salzburg</strong></p>
              <p>Information Technology and System Management</p>
            </div>
            <div>
              <p><strong>KEA</strong></p>
              <p>Digital Product Development</p>
            </div>

            <h3>Hobbies</h3>
            <div>
              <p><strong>Endurance Sport</strong></p>
              <p>Running</p>
            </div>
            <div>
              <p><strong>Playing logic Games</strong></p>
              <p>Escape Room</p>
            </div>
          </div>

          <div
            class="col-50 flex center"
            style="flex-direction: column;"
          >
            <div
              class="flex center"
            >
              <a href="https://www.linkedin.com/in/christian-weiss-sbg/"><img
                id="linkedin"
                src="/public/linkedin.svg"
                alt="Linkedin Icon"
              ></a>
            </div>
            <div>/christian-weiss-sbg</div>
          </div>
        </div>
      </div>
    </section>
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
</style>
