<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand">
      <img
        src="@/assets/logo.png"
        title="logo"
        class="navbar-logo"
        alt="logo"
        width="40"
        height="20"
      />
      Science Journal
    </a>
    <button type="button" title="logout" class="navbar-btn bg-info text-dark">
      <img src="@/assets/logout.svg" alt="logout" width="20" height="20" />
      logout
    </button>
  </nav>
</template>
<style scoped>
.navbar {
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  &-brand {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    color: #fff;
  }

  &-logo {
    display: inline-block;
    margin-right: 0.5em;
  }
  &-btn {
    padding: 0.5em 2em;
    border-radius: 1.2em;
    border: none;
    display: flex;
    align-items: center;
    &:hover {
      outline: 1px solid white;
    }
  }
}
</style>
