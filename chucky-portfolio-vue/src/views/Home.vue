<style lang="scss" src="../styles/home.scss" scoped></style>
<template>
  <div class="home__main-container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="home__hero-wrapper">
      <div class="home__hero-info__wrapper">
        <h1>Aura Bravo.</h1>
        <p>
          Hi, my name is Aura Bravo. I'm an Industrial Designer passionate about
          digital media and interfaces, it's design and development. Here is
          some of my work.
        </p>
      </div>
      <div class="home__hero-image__wrapper"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Project from '../components/Project.vue'
//import styles from '../styles/home.scss'

export default {
  name: 'Home',
  components: {
    Project
  }
}
</script>
