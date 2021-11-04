<template>
  <section>
    <h1>Please enter all of the fields below</h1>
    <button @click="closeError">OK</button>
  </section>
</template>

<script>
export default {
    emits: ['closeError'],
    methods: {
        closeError() {
            this.$emit('closeError');
        }
    }
};
</script>

<style scoped>
section {
    @apply flex flex-col justify-around items-center p-10 border-4 border-red-600 border-solid bg-gray-800 text-gray-400 rounded-xl;
}
</style>