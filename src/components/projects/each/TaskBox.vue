<template>
    <li>
        <h3>{{ name }}</h3>
        <div>{{ taskCount }} Tasks</div>
        <a href="#">View Tasks</a>
    </li>
</template>

<script>
export default{
    props: ['name', 'taskCount']
}
</script>

<style scoped>
    h3{
        @apply text-red-600;
    }
    div {
        @apply text-gray-300;
    }
</style>