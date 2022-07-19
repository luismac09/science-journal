<script setup>
import addIcon from '@/assets/add.svg'
</script>
<template>
  <button type="button" class="button">
    <img
      :src="addIcon"
      alt="add icon"
      title="add Post"
      width="50"
      height="50"
    />
  </button>
</template>
<style scoped>
.button {
  position: fixed;
  bottom: 1.2em;
  right: 1.5em;
  & img {
    border-radius: 50%;
    &:hover {
      background-color: #1d6042;
    }
    &:active {
      opacity: 50%;
    }
  }
}
</style>
