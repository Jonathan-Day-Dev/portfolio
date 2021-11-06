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