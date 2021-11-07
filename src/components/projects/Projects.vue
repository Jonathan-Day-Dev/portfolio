<template>
  <TheBanner />
  <router-view :key="$route.fullPath"></router-view>
  <ul>
    <li
      v-for="project in projects"
      :key="project.id"
    >
      <ProjectBox
        :id="project.id"
        :name="project.name"
        :techCount="project.tech.length"
      />
    </li>
  </ul>
</template>

<script>
import ProjectBox from "./each/ProjectBox.vue";
export default {
  components: {
    ProjectBox,
  },
  inject: ["projects"]
};
</script>

<style scoped>
h1 {
  @apply mt-28 text-red-600;
}
ul {
  @apply list-none flex justify-evenly flex-wrap;
}
li {
  @apply w-full md:w-1/2;
}
</style>