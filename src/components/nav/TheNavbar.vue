<template>
  <nav>
    <img src="img/logo.png" alt="logo" />
    <section id="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Me</router-link>
      <router-link to="/contact">Contact</router-link>
      <a href="http://daydev-blog.com/" target="_blank">Blog</a>
    </section>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  @apply bg-gray-600 flex fixed top-0 left-0 w-full h-20 items-center;
}
img {
  @apply w-2/12 rounded ml-10 opacity-60;
}
a {
  @apply text-gray-200 text-xl font-bold inline list-none mx-10 my-2 no-underline;
}
a:hover {
  @apply cursor-pointer text-gray-400;
}
#links {
  @apply ml-auto;
}
</style>