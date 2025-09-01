<script setup>
import { MyButton } from '@sean/ui'
import axios from 'axios'
import { ref } from 'vue'

const data = ref(null)
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    data.value = res.data
    console.log(data.value)
  })

const size = ref('small')
// const size = 'big'
</script>

<template>
  <p class="text-my-color">
    hello my color
  </p>
  <MyButton
    v-for="d in data"
    :key="d.id"
    :size="size"
    style="display: block; margin-bottom: 10px;"
  >
    <template #foo>
      {{ d.name }}
    </template>
  </MyButton>
</template>

<style scoped></style>
