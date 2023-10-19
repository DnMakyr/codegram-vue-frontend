<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="w-full sticky top-0 z-10">
    <div class="wrapper flex">
      <nav class="flex justify-between items-center shadow-md">
        <RouterLink to="/">Home</RouterLink>
        <div>
          <RouterLink to="/login">Sign In</RouterLink>
          <RouterLink to="/register">Sign Up</RouterLink>
          <RouterLink to="/dashboard">Dashboard</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper{
  height: 50px;
  background: rgb(247, 245, 245);
}
header {
  line-height: 1.5;
  max-height: 100vh;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
}

nav {
  width: 100%;
  text-align: center;
}

nav a.router-link-exact-active {
  color: rgb(220, 10, 10);
}
nav a:hover {
  filter: brightness(80%);
}

/* nav a.router-link-exact-active:hover {
 
} */

nav a {
  display: inline-block;
  padding: 1rem 1rem;
  /* border-left: 1px solid; */
  text-decoration: none;
  color: black;
}
</style>
