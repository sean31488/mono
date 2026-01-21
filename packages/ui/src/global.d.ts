import type MyButton from './components/MyButton.vue'
import type MyInput from './components/MyInput.vue'
import type MyImg from './components/MyImg.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    MyButton: typeof MyButton
    MyInput: typeof MyInput
    MyImg: typeof MyImg
  }
}
