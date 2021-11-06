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
        @apply w-60 p-3 no-underline text-gray-300 font-bold;
    }
</style>