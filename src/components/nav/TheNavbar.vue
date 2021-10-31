<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About Me</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  
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
a {
  color: #eee;
  display: inline;
  list-style: none;
  margin: 0.5rem 2rem;
}
a:hover {
    cursor: pointer;
    color: #ccc;
    border: 1px solid black;
}
</style>