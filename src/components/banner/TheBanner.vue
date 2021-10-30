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
    display: flex;
    justify-content: space-evenly;
    margin-top: 7rem;
    height: 100vh;
}
section {
    width: 50%;
}
img {
    width: 50%;
    border-radius: 50%;
}
p {
    color: #eee;
}
#welcome_1 {
    font-size: 2rem;
}
#welcome_name {
    font-size: 3rem;
}
#welcome_desc {
    font-size: 1.5rem;
}
</style>