<template>
  <header>
    <section id="welcome">
      <div>
        <p id="welcome_1">Welcome</p>
        <p id="welcome_desc">Web Developer and UI/UX Designer</p>
      </div>
      <div id="welcome_msg_div">
        <p id="welcome_msg">
          Hello! My name is Jonathan and I have a passion for creating,
          designing and developing web applications with beautiful user
          experience and intuitive user interface
        </p>
      </div>
    </section>
    <section id="photo">
      <img :src="imgPath" alt="me" />
    </section>
  </header>
</template>

<script>
export default {
  data() {
    return {
      imgPath: "/img/me02.jpg",
    };
  },
};
</script>

<style scoped>
header {
  @apply flex justify-between h-52 w-5/6 mt-16 mx-auto mb-0;
}
img {
  @apply h-full rounded-full border-2 border-gray-400 border-solid;
}
p {
  @apply text-gray-300;
}
section {
  @apply w-1/2;
}
#welcome,
#welcome div {
  @apply flex justify-evenly items-center ml-8 w-3/4;
}
#welcome {
    @apply w-full;
}
#welcome div {
    @apply flex-col w-full h-full;
}
#welcome_desc {
  @apply text-lg font-bold;
}
#welcome_1 {
  @apply text-sm text-gray-400 uppercase;
}
#welcome_msg_div {
  @apply flex-col h-full;
}
#welcome_msg {
  @apply text-gray-400 text-lg leading-relaxed w-10/12;
}
</style>