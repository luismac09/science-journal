<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
// const route=useRoute()
const goToJournal = () => router.push({ name: 'journal' })
</script>

<template>
  <div class="wrapper">
    <p class="text-3xl font-bold underline mb-4">Science Journal</p>
    <img class="mx-auto" alt="Vue logo" src="../assets/logo.png" />
    <button type="button" class="button bg-primary" @click="goToJournal">
      Journals
    </button>
  </div>
</template>

<style scoped>
.wrapper {
  width: 90%;
  margin: auto;
  text-align: center;
}
.button {
  display: inline-block;
  color: #fff;
  border: none;
  font-size: 20px;
  padding: 10px 50px;
  border-radius: 2rem;
}
</style>
