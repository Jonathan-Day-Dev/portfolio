<template>
  <h1>Let's Talk!</h1>
  <form @submit.prevent>
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        v-model="name"
        placeholder="Enter your name"
      />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        v-model="email"
        placeholder="Enter your email"
      />
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea
        class="form-control"
        id="message"
        v-model="message"
        rows="3"
        placeholder="Enter your message"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-primary" @click="sendMessage">
      Submit
    </button>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  @apply mt-28 text-red-600;
}
form {
  @apply w-screen overflow-x-hidden;
}
</style>