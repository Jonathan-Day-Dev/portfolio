<template>
  <li>
    <SubmitButton :to="projectLink">
      <section>
        <h3>{{ name }}</h3>
        <div>{{ techCount }} Tech</div>
      </section>
    </SubmitButton>
  </li>
</template>

<script>
import SubmitButton from "../../UI/SubmitButton.vue";
export default {
  props: ["id", "name", "techCount", "tech"],
  components: {
    SubmitButton,
  },
  // methods: {
  //   refreshRoute() {
  //     this.$router.go(0)
  //   }
  // },
  computed: {
    projectLink() {
      return {
        name: "projectDetails",
        params: { projectId: this.id },
      };
    },
  },
};
</script>

<style scoped>
section {
  @apply flex flex-col justify-evenly items-center h-60 m-5 border-2 border-gray-400 border-solid rounded-lg;
}
section:hover {
  @apply bg-gray-500 opacity-50 text-gray-800;
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
</style>