<script setup lang="ts">
const model = defineModel({type: String})
</script>

<template>
<input v-model="model" class="border border-gray-300">
</template>

<style scoped>

</style>
