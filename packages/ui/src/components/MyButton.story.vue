<script setup lang="ts">
import MyButton from '@/components/MyButton.vue'
</script>

<template>
  <Story>
    <MyButton>
      <template #foo>
        Hello
      </template>
    </MyButton>
  </Story>
</template>

<style scoped>

</style>
