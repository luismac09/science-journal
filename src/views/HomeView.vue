<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
// const route=useRoute()
const goToJournal = () => router.push({ name: 'journal' })
</script>

<template>
  <div class="wrapper mx-auto mt-3 mb-3 text-center">
    <p class="text-3xl font-bold mb-4">Science Journal</p>
    <img
      class="mx-auto mb-3"
      alt="Science logo"
      src="../assets/logo.png"
      width="200"
      height="200"
    />
    <button
      type="button"
      class="button bg-primary text-light"
      @click="goToJournal"
    >
      Journals
    </button>
  </div>
</template>

<style scoped>
.wrapper {
  width: 90%;
}
.button {
  display: inline-block;
  border: none;
  font-size: 20px;
  padding: 10px 50px;
  border-radius: 2rem;
}
</style>
