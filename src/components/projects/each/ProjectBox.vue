<template>
  <SubmitButton :to="projectLink">
    <section>
      <h3>{{ name }}</h3>
      <div>{{ techCount }} Tech</div>
    </section>
  </SubmitButton>
</template>

<script>
import SubmitButton from "../../UI/SubmitButton.vue";
export default {
  props: ["id", "name", "techCount", "tech"],
  components: {
    SubmitButton,
  },
  data() {
    return {
      animateButton: false
    }
  },
  methods: {
    animateBtn() {
      this.animateButton = true;
    },
  },
  computed: {
    projectLink() {
      return {
        name: "projectDetails",
        params: { projectId: this.id },
      };
    },
    highlightBlock() {
      return this.highlight ? { animate: true } : { animate: false };
    }
  },
};
</script>

<style scoped>
section {
  @apply flex flex-col justify-evenly items-center h-60 m-5 border-2 border-gray-400 border-solid rounded-lg;
}
section:hover {
  @apply cursor-pointer border-gray-600;
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