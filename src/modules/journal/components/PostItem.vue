<script setup></script>
<template>
  <div class="post text-sm font-medium cursor-pointer">
    <div class="post-header">
      <h3 class="post-title">Post</h3>
      <div class="post-date">
        <span class="mr-1.5">15</span>
        <span class="mr-1.5">Julio</span>
        <span>2021</span>
      </div>
    </div>
    <div class="post-description">
      <p class="text-left">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
        explicabo vitae sit quidem? Magnam, voluptatum nisi maxime soluta error
        unde provident odio obcaecati sit optio quas nostrum nobis, consequatur
        repellendus!
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
