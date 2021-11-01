<template>
    <router-link>
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    a {
        @apply w-60 border-2 border-gray-300 border-solid p-3 no-underline text-gray-300 font-bold rounded-xl;
    }
    a:hover {
        @apply bg-gray-500 opacity-60 text-gray-800;
    }
</style>