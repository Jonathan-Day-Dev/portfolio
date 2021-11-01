<template>
  <TheNavbar />
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      projects: [
        {
          id: "project-1",
          name: "Project 1",
          description: "This is Project One",
          tech: ["inertia", "vue"],
        },
        {
          id: "project-2",
          name: "Project 2",
          description: "This is Project Two",
          tech: [
            "laravel",
            "inertia",
            "vue",
          ],
        },
        {
          id: "project-3",
          name: "Project 3",
          description: "This is Project Three",
          tech: ["tailwind"],
        },
        {
          id: "project-4",
          name: "Project 4",
          description: "This is Project Four",
          tech: [
            "laravel",
            "inertia",
            "vue",
            "tailwind",
          ],
        },
      ],
      tech: [
        {
          id: "laravel",
          name: "Laravel",
          description: "Create a new project with Laravel",
        },
        {
          id: "inertia",
          name: "InertiaJS",
          description: "Set up API to incorporate Inertia routing",
        },
        {
          id: "vue",
          name: "VueJS",
          description: "Begin setting up your front end",
        },
        {
          id: "tailwind",
          name: "TailwindCSS",
          description: "Set up Tailwind",
        },
      ],
    }
  },
  mounted() {
    this.$router.push("/");
  },
};
</script>

<style>
* {
  @apply box-border m-0 p-0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
