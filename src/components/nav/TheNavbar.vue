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
        {
          text: "Blog",
          href: "/blog",
        },
      ],
    };
  },
};
</script>

<style scoped>
nav {
  background-color: #555;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  justify-content: flex-end;
  align-items: center;
}
li {
  color: #eee;
  display: inline;
  list-style: none;
  margin: 0.5rem 2rem;
}
li:hover {
    cursor: pointer;
    color: #ccc;
    border: 1px solid black;
}
</style>