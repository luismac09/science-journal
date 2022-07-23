<script setup>
import { computed, defineAsyncComponent, ref } from 'vue'
import { journal } from '../store/'
const PostItem = defineAsyncComponent(() =>
  import('../components/PostItem.vue')
)
const term = ref('')
const postByTerm = computed(() => journal.getPostByTerm(term.value))
</script>
<template>
  <div class="list">
    <div class="px-2 pt-2">
      <input
        v-model="term"
        type="search"
        class="search text-dark outline-dark"
        placeholder="search post"
      />
    </div>
    <div class="item">
      <post-item v-for="post in postByTerm" :key="post.id" :post="post" />
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
