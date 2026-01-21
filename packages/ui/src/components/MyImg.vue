<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  src: { type: String, default: '' },
  isShowDefaultImg: { type: Boolean, default: true }
})

const defaultImg = ref('')

const onError = (): void => {
  defaultImg.value = new URL('../assets/img_placeholder.png', import.meta.url).href
}
</script>

<template>
  <div class="my-prefix my-img">
    test
    <p class="lib:text-4xl">
      lib:text-4xl
    </p>
    <div class="lib:bg-red-500">
      lib:bg-red-500
    </div>
    <img
      v-if="isShowDefaultImg"
      :src="defaultImg || src"
      @error="onError"
    >
  </div>
</template>

<style lang="scss" scoped>
.my-img{
  img {
    object-fit: cover;
  }
}
</style>
