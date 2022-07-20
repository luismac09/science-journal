<script setup>
import addIcon from '@/assets/add.svg'

const props = defineProps({
  icon: {
    type: String,
    default() {
      return addIcon
    }
  }
})
</script>
<template>
  <button type="button" class="button">
    <img
      :src="props.icon"
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
    padding: 0.3em;
    &:hover {
      background-color: #1d6042;
    }
    &:active {
      opacity: 50%;
    }
  }
}
</style>
