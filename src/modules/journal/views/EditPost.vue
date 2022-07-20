<script setup>
import newspaper from '@/assets/old-newspaper.jpg'
import saveIcon from '@/assets/save.svg'
import trashIcon from '@/assets/trash.svg'
import uploadIcon from '@/assets/upload.svg'
import { defineAsyncComponent } from 'vue'
const FloatingButton = defineAsyncComponent(() =>
  import('../components/FloatingButton.vue')
)
</script>
<template>
  <div class="post mt-2 p-2 mx-auto">
    <div class="post-header flex items-center justify-between">
      <p>
        <span class="text-info text-xl font-bold">lorem</span>
        <span class="mx-3 text-lg">ipsum</span>
        <span class="mx-1 text-lg">2022</span>
      </p>
      <div class="flex">
        <button
          type="button"
          class="button flex items-center justify-center bg-danger"
        >
          <span class="pr-1">Delete</span>
          <img
            :src="trashIcon"
            alt="trash icon"
            title="delete post"
            width="20"
            height="20"
          />
        </button>
        <button
          type="button"
          class="button flex items-center justify-center bg-info"
        >
          <span class="pr-1">Upload</span>
          <img
            :src="uploadIcon"
            alt="upload icon"
            title="upload photo"
            width="20"
            height="20"
          />
        </button>
      </div>
    </div>
    <div class="post-body flex mx-auto">
      <textarea class="post-textarea" placeholder="what is today's news?" />
    </div>
  </div>
  <img
    class="post-image"
    :src="newspaper"
    alt="post picture"
    title="newspaper"
  />
  <floating-button :icon="saveIcon" />
</template>
<style scoped>
::placeholder {
  color: rgb(139, 138, 138);
}
textarea:focus {
  outline: none;
}
.post {
  width: 90%;
  border-bottom: 2px solid white;
  background-color: rgb(63, 69, 73);
  border-radius: 1em;
  &-header {
    border-bottom: 2px solid white;
    padding: 0.6em;
    margin-bottom: 1em;
  }
  &-body {
    width: 90%;
    height: 10rem;
    margin-bottom: 1em;
  }
  &-textarea {
    width: 100%;
    padding: 1em;
    caret-color: white;
    color: rgb(231, 227, 227);
    background-color: rgb(80, 78, 78);
  }
  &-image {
    width: 200px;
    position: absolute;
    right: 3.2em;
    bottom: 6em;
    border-radius: 1em;
  }
}
.button {
  padding: 0.5em 1.8em;
  border-radius: 1em;
  margin-left: 0.5em;
}
</style>
