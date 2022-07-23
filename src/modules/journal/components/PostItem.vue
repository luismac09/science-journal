<script setup>
import { computed, toRefs } from 'vue'
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})
const { id, title, date, text } = toRefs(props.post)
const shortedText = computed(() =>
  text.value.length > 130 ? text.value.substring(0, 130) + '...' : text.value
)
const postDate = computed(() => {
  const newDate = new Date(date.value)
  return newDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  })
})
</script>
<template>
  <div
    class="post text-sm font-medium cursor-pointer"
    @click="$router.push({ name: 'edit-post', params: { id } })"
  >
    <div class="post-header">
      <h3 class="post-title">{{ title }}</h3>
      <div class="post-date">
        <span class="mr-1.5">{{ postDate }}</span>
      </div>
    </div>
    <div class="post-description">
      <p class="text-left">
        {{ shortedText }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.post {
  margin: 0.5em;
  background-color: hsl(215, 22%, 17%);
  padding: 0.5em;
  border-radius: 0.8em;
  transition: all 0.2s ease-in;
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8em;
  }
  &-title {
    font-size: 0.9rem;
    padding-left: 0.5em;
    color: #79acdf;
    text-transform: uppercase;
  }
  &-date {
    outline: 2px solid #2c3e50;
    border-radius: 1em;
    padding: 0.2em 1em;
  }
  &-description {
    border-left: 4px solid #2c3e50;
    padding-left: 0.3em;
  }
  &:hover {
    background-color: rgb(67, 87, 117);
  }
}
</style>
