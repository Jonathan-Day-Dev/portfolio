<template>
  <header>
      <section id="welcome">
          <p id="welcome_1">Welcome</p>
          <p id="welcome_name">Jonathan Day</p>
          <p id="welcome_desc">Web Developer and UI/UX Designer</p>
      </section>
      <section id="photo">
          <img :src="imgPath" alt="me">
      </section>
  </header>
</template>

<script>
export default {
    data() {
        return {
            imgPath: '/img/me02.jpg'
        }
    }
};
</script>

<style scoped>
header {
    @apply flex justify-evenly h-1/2 w-10/12 mt-40 mx-auto mb-0;
}
section {
    @apply w-1/2;
}
img {
    @apply w-1/2 rounded-full;
}
p {
    @apply text-gray-300;
}
#welcome {
    @apply flex flex-col justify-evenly items-center ml-4;
}
#welcome_1,
#welcome_name,
#welcome_desc {
    @apply mb-4;
}
#welcome_1 {
    @apply text-xl text-gray-500 uppercase;
}
#welcome_name {
    @apply text-5xl;
}
#welcome_desc {
    @apply text-xl;
}
</style>