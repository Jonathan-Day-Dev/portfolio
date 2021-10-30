<template>
  <nav>
    <ul>
      <li v-for="item in items" :key="item.text">
        <router-link :to="item.path">
          {{ item.text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          href: "/",
        },
        {
          text: "About",
          href: "/about",
        },
        {
          text: "Contact",
          href: "/contact",
        },
      ],
    };
  },
};
</script>

<style scoped>
nav {
    background-color: skyblue;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: flex-end;
}
li {
    display: inline;
    list-style: none;
    margin: 0.5rem 1rem;
}
</style>