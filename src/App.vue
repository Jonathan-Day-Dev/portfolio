<template>
  <TheNavbar />
  <TheBanner />
</template>

<script>
import TheBanner from './components/banner/TheBanner.vue';
export default {
  name: "App",
  components: {
    TheBanner
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
