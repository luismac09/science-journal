<script setup>
import { defineAsyncComponent } from 'vue'
const FloatingButton = defineAsyncComponent(() =>
  import('../components/FloatingButton.vue')
)
</script>
<template>
  <div class="flex justify-center text-light">
    <h1 class="self-center text-2xl font-bold">no post selected</h1>
  </div>
  <floating-button />
</template>
<style scoped>
div {
  height: 100%;
}
</style>
