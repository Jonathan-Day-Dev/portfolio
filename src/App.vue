<template>
  <TheNavbar />
  <TheBanner />
  <main>
    <router-view></router-view>
  </main>
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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
