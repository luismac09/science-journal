<script setup>
import { defineAsyncComponent } from 'vue'
const NavBar = defineAsyncComponent(() => import('../components/NavBar.vue'))
const PostList = defineAsyncComponent(() =>
  import('../components/PostList.vue')
)
</script>

<template>
  <nav-bar />
  <div class="wrapper flex">
    <div class="column basis-4/12">
      <post-list />
    </div>
    <div class="column basis-8/12">
      <router-view />
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  height: 100%;
}
.column {
  text-align: center;
}
</style>
