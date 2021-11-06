<template>
  <li>
    <section>
      <h3>{{ name }}</h3>
      <div>{{ techCount }} Tech</div>
      <div id="btnGroup">
        <SubmitButton :to="projectLink">View Project Details</SubmitButton>
      </div>
    </section>
  </li>
</template>

<script>
import SubmitButton from "../../UI/SubmitButton.vue";
export default {
  props: ["id", "name", "techCount", "tech"],
  components: {
    SubmitButton,
  },
  computed: {
    projectLink() {
      return { name: 'projectDetails', params: { projectId: this.id } }
    }
  }
};
</script>

<style scoped>
section {
  @apply flex flex-col justify-evenly items-center h-60 m-5 border-2 border-gray-400 border-solid rounded-lg;
}
h3 {
  @apply text-red-600 text-6xl;
}
div,
li {
  @apply text-gray-300 w-full md:w-1/2;
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