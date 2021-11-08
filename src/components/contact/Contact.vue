<template>
  <TheBanner />
  <h1>Let's Talk Today</h1>
  <transition name="err">
    <section v-if="showError" class="error-box">
      <FormError @closeError="closeErrorBox" />
    </section>
  </transition>
  <form @submit.prevent>
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        v-model="user.name"
        placeholder="Enter your name"
      />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        v-model="user.email"
        placeholder="Enter your email"
      />
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea
        class="form-control"
        id="message"
        v-model="user.message"
        rows="5"
        cols="50"
        placeholder="Enter your message"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-primary" @click="sendMessage">
      Submit
    </button>
  </form>
</template>

<script>
import FormError from "./FormError.vue";
export default {
  components: {
    FormError,
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        message: "",
      },
      showError: false,
      formChangesSaved: false,
    };
  },
  methods: {
    sendMessage() {
      this.showError = false;
      if (this.user.name && this.user.email && this.user.message) {
        let username = this.user.name;
        let email = this.user.email;
        let message = this.user.message;
        this.user.name = "";
        this.user.email = "";
        this.user.message = "";
        console.log(username, email, message);
      } else {
        this.showError = true;
      }
      this.formChangesSaved = true;
    },
    closeErrorBox() {
      this.showError = false;
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.formChangesSaved) {
      next();
    } else {
      const leavePage = confirm(
        "You have unsaved changes. Are you sure you want to leave?"
      );
      next(leavePage);
    }
  },
};
</script>

<style scoped>
h1 {
  @apply mt-28 text-red-600 underline mb-4;
}
form {
  @apply w-screen overflow-x-hidden mb-10;
}
label {
  @apply text-gray-300 mb-2;
}
input {
  @apply w-96 py-2 pl-1;
}
.form-group {
  @apply flex flex-col items-center justify-center mb-2 w-1/2 mx-auto;
}

/***** Animation Transitions *****/
.err-enter-from,
.err-leave-to {
  @apply opacity-0 bg-transparent;
}
.err-enter-active,
.err-leave-active {
  @apply transition-all duration-500 ease-out;
}
.err-enter-to,
.err-leave-from {
  @apply opacity-100 bg-gray-700;
}
</style>