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
    height: 50vh;
    width: 90%;
    margin: 10rem auto 0;
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
#welcome {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 1rem;
}
#welcome_1,
#welcome_name,
#welcome_desc {
    margin-bottom: 1rem;
}

#welcome_1 {
    font-size: 1rem;
    text-transform: uppercase;
    color: #c1c1c1;
}
#welcome_name {
    font-size: 3rem;
}
#welcome_desc {
    font-size: 1.5rem;
}
</style>