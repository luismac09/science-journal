<script setup>
import { defineAsyncComponent } from 'vue'
const PostItem = defineAsyncComponent(() =>
  import('../components/PostItem.vue')
)
</script>
<template>
  <div class="list">
    <div class="px-2 pt-2">
      <input
        type="search"
        class="search text-dark outline-dark"
        placeholder="search post"
      />
    </div>
    <div class="item">
      <post-item v-for="item in 100" :key="item" />
    </div>
  </div>
</template>
<style scoped>
.list {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 50px);
}
.search {
  width: 100%;
  outline: 1px solid;
  height: 35px;
  padding-left: 0.8em;
  border-radius: 8px;
}
.item {
  height: calc(100vh - 150px);
  overflow: auto;
  &::-webkit-scrollbar {
    width: 4px;
    background-color: rgb(68, 68, 68);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgb(116, 114, 114);
  }
}
</style>
