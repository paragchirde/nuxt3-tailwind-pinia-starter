<template>
  <div :class="store.theme === 'light' ? 'light' : 'dark'">
    <slot/>
  </div>
</template>

<script>
import {useStore} from '~/store/index'
export default {
    data() {
      return {
        store: useStore()
      }
    }
}
</script>

<style>

</style>