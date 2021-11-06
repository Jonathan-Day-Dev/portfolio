<template>
  <section>
    <h3>{{ name }} Details</h3>
    <ul>
      <li v-for="t in projectTech" :key="t.id">{{ capitalize(t) }}</li>
    </ul>
    <div id="btnGroup">
      <SubmitButton to="/projects">Close</SubmitButton>
    </div>
  </section>
</template>

<script>
import SubmitButton from "../../UI/SubmitButton.vue";
export default {
  data() {
    return {
      name: "",
      projectTech: [],
    };
  },
  props: ["projectId"],
  inject: ["projects", "tech"],
  components: {
    SubmitButton,
  },
  methods: {
    getData() {
      const selectedProject = this.projects.find((p) => p.id == this.projectId);
      this.name = selectedProject.name;
      for (let t of selectedProject.tech) {
        this.projectTech.push(t);
      }
    },
    capitalize(word) {
          return word[0].toUpperCase() + word.slice(1);
      }
  },
  mounted() {
    this.getData();
  },
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