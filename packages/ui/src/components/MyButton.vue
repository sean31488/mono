<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  hasBackground: { type: Boolean },
  text: { type: String, default: '' },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium',
    validator: (value: string) => ['small', 'medium', 'large'].includes(value)
  },
  id: { type: Number, default: 0 }
})
</script>

<template>
  <button :style="{background: hasBackground ? 'red' : 'white'}">
    <slot name="foo" />
    <slot name="bar" />
    <slot name="baz" />
  </button>
</template>

<style scoped>

</style>
