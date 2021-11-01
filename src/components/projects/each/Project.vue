<template>
  <TheNavbar />
  <div>
    <ProjectBox :name="projectTitle" :techCount="projectTech.length" :tech="projectTech"/>
  </div>
</template>

<script>
import ProjectBox from "./ProjectBox.vue";
export default {
  inject: ["projects", "tech"],
  components: {
    ProjectBox,
  },
  data() {
    return {
      projectTitle: "",
      projectTech: [],
    };
  },
  created() {
    try {
      const projectId = this.$route.params.projectId;
      const selectedProject = this.projects.find(
        (project) => project.id === projectId
      );
      const ptech = selectedProject.tech;
      const selectedTech = [];
      for (const pt of ptech) {
        const foundTech = this.tech.find((thistech) => thistech.id === pt);
        selectedTech.push(foundTech);
      }
      this.projectTech = selectedTech;
      this.projectTitle = selectedProject.name;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
div {
  @apply mt-36 list-none;
}
</style>