<template>
  <li>
    <section>
      <h3>{{ name }}</h3>
      <div v-if="!this.$route.params.projectId">{{ techCount }} Tech</div>
      <ul v-else>
        <li v-for="t in tech" :key="t.id">{{ t.name }}</li>
      </ul>
      <div id="btnGroup">
        <SubmitButton v-if="!this.$route.params.projectId"  :to="projectLink">View Project</SubmitButton>
        <SubmitButton v-else to="/projects">Back To All Projects</SubmitButton>
      </div>
    </section>
  </li>
</template>

<script>
import SubmitButton from "../../utils/SubmitButton.vue";
export default {
  props: ["id", "name", "techCount", "tech"],
  components: {
    SubmitButton,
  },
  computed: {
    projectLink() {
      return "/projects/" + this.id;
    }
  }
};
</script>

<style scoped>
section {
  @apply flex flex-col justify-evenly items-center w-3/4 h-60 mx-auto;
}
h3 {
  @apply text-red-600 text-6xl;
}
div,
li {
  @apply text-gray-300;
}
li {
  @apply my-4;
}
ul {
  @apply list-none;
}
#btnGroup {
  @apply flex justify-evenly items-center w-full;
}
</style>