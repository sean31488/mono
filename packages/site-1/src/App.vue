<script setup>
// import { MyButton, MyInput, MyImg } from '@sean/ui'
import axios from 'axios'
import { ref } from 'vue'
import '@sean/ui/style.css'
import './style.css'

const data = ref(null)
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    data.value = res.data
    // console.log(data.value)
  })

const size = ref('small')
// const size = 'big'
</script>

<template>
  <p class="text-my-color">
    hello my color
  </p>
  <p class="bg-red-500">
    bg-red-500
  </p>
  <MyButton size="foo" />
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
  <MyInput />
  <MyImg
    src="http://foo/bar.png"
    style="width: 200px; height: 200px;"
  />

  <MyImg
    :is-show-default-img="123"
    src="http://foo/bar.png"
    style="width: 150px; height: 150px;"
  />
</template>

<style scoped>

</style>
