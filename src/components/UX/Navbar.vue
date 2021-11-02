<template>
  <nav>
    <div class="top">
      <div class="mid">
        <div class="bottom">
          <!-- Logo -->
          <div>
            <router-link to="#" class="img-link">
              <img src="img/logo.png" alt="Logo" class="image" />
            </router-link>
          </div>
          <!-- Primary -->
          <div class="link-block">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/projects">Projects</router-link>
            <router-link class="nav-link" to="/about">About Me</router-link>
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </div>
        </div>
        <!-- Secondary Navbar items -->
        <div class="secondary">
          <a class="sec-link" href="http://daydev-blog.com/" target="_blank"
            >Blog</a
          >
          <a class="sec-link" href="#">Newsletter</a>
        </div>
        <!-- Mobile menu button -->
        <div v-if="!showMenu" class="mobile">
          <button class="mobile-menu-button" @click="toggleMenu">
            <svg
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <!-- mobile menu -->
        <div v-if="showMenu" class="mobile-menu">
          <ul class="mobile-menu-list">
            <li><router-link to="/" class="mobile-link">Home</router-link></li>
            <li><router-link to="/projects" class="mobile-link">Projects</router-link></li>
            <li><router-link to="/about" class="mobile-link">About</router-link></li>
            <li><router-link to="/contact" class="mobile-link">Contact Us</router-link></li>
          </ul>
        </div>
        <div v-if="showMenu" class="outside" @click="away"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    away() {
      this.showMenu = false;
    },
  },
  mounted() {
    this.showMenu = false;
  },
};
</script>

<style scoped>
nav {
  @apply bg-white shadow-lg fixed top-0 left-0 w-full;
}
svg {
  @apply w-6 h-6 text-gray-500;
}
.nav-link {
  @apply py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300;
}
.img-link {
  @apply flex items-center py-4 px-2;
}
.image {
  @apply h-full w-48 mr-2;
}
.link-block {
  @apply hidden md:flex items-center space-x-1;
}
.top {
  @apply max-w-6xl mx-auto px-4;
}
.mid {
  @apply flex justify-between;
}
.bottom {
  @apply flex space-x-7;
}
.secondary {
  @apply hidden md:flex items-center space-x-3;
}
.sec-link {
  @apply py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300 no-underline;
}
.mobile {
  @apply md:hidden flex items-center;
}
.mobile-menu {
  @apply w-full z-10;
}
.mobile button {
  @apply outline-none;
}
/* .active-mobile-link {
  @apply block text-sm px-2 py-4 text-white bg-green-500 font-semibold;
} */
.mobile-link {
  @apply block text-sm px-2 py-4 hover:bg-green-500 transition duration-300;
}
.mobile-menu-list {
  @apply list-none;
}
.mobile-menu-list li a {
  @apply no-underline;
}
.mobile-menu-list li a.active-mobile-link {
  @apply bg-green-500 text-white font-semibold;
}
.outside {
    @apply w-full h-full fixed top-0 left-0;
}
</style>