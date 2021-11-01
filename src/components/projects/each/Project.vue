<template>
  <ul>
    <!-- <li v-for="projectTask in projectTasks" :key="projectTask.id">
      <p>{{ projectTask.name || "Anything" }}</p>
      <p>{{ projectTask.description || "something...." }}</p>
    </li> -->
    <TaskBox :name="projectTitle" :taskCount="projectTasks.length" />
  </ul>
</template>

<script>
import TaskBox from './TaskBox.vue';
export default {
  inject: ["projects", "tasks"],
  components: {
      TaskBox
  },
  data() {
    return {
      projectTitle: "",
      projectTasks: [],
    };
  },
  created() {
    try {
      const projectId = this.$route.params.projectId;
      const selectedProject = this.projects.find(
        (project) => project.id === projectId
      );
      const ptasks = selectedProject.tasks; 
      const selectedTasks = [];
      for (const ptask of ptasks) {
        const foundTask = this.tasks.find((thistask) => thistask.id === ptask);
        selectedTasks.push(foundTask);
      }
      this.projectTasks = selectedTasks;
      this.projectTitle = selectedProject.name;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
ul {
    @apply mt-48;
}
</style>