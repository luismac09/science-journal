<script setup></script>
<template>
  <div class="list">
    <div class="px-2 pt-2">
      <input
        type="search"
        class="search text-dark outline-dark"
        placeholder="search post"
      />
    </div>
  </div>
</template>
<style scoped>
.list {
  height: 100%;
}
.search {
  width: 100%;
  outline: 1px solid;
  height: 35px;
  padding-left: 0.8em;
  border-radius: 8px;
}
</style>
