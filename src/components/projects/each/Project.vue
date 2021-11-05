<template>
  <div>
    <ProjectBox
      :id="projectId"
      :name="projectTitle"
      :techCount="projectTech.length"
      :tech="projectTech"
    />
  </div>
</template>

<script>
import ProjectBox from "./ProjectBox.vue";
export default {
  inject: ["projects", "tech"],
  props: ["projectId"],
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
      const selectedProject = this.projects.find(
        (project) => project.id === this.projectId
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
  @apply list-none;
}
</style>