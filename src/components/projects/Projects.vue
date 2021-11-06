<template>
  <TheBanner />
  <router-view></router-view>
  <ul>
    <ProjectBox 
      v-for="project in projects" 
      :key="project.id"
      :id="project.id" 
      :name="project.name" 
      :techCount="project.tech.length"
      style="border-bottom: 2px solid darkgray"
    />
  </ul>
</template>

<script>
import ProjectBox from "./each/ProjectBox.vue";
export default {
  components: {
    ProjectBox
  },
  inject: ['projects']
};
</script>

<style scoped>
h1 {
  @apply mt-28 text-red-600;
}
ul {
  @apply list-none;
}
</style>