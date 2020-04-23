<style lang="scss" src="../styles/home.scss" scoped></style>
<template>
  <div class="home__main-container">
    <div class="max-bound">
      <img alt="Vue logo" src="../assets/logo.png" />
      <section class="section-spacer section-spacer--large">
        <div class="silc-grid">
          <div class="silc-grid__col--6"></div>
        </div>
        <div class="home__hero-wrapper">
          <div class="home__hero-info__wrapper">
            <h1>Aura Bravo.</h1>
            <p>
              Hi, my name is Aura Bravo. I'm an Industrial Designer passionate
              about digital media and interfaces, it's design and development.
              Here is some of my work.
            </p>
          </div>
          <div class="home__hero-image__wrapper">
            <div
              class="home__hero-background-image"
              style="background-image: url('./img/ed1.jpg')"
            ></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* import Project from '../components/Project.vue' */
//import styles from '../styles/home.scss'

export default {
  name: 'Home',
  components: {}
}
</script>
