<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login" class="nav-link">Connection</router-link> |
      <router-link to="/" class="nav-link">Home</router-link> |
      <router-link to="/about" class="nav-link">About</router-link>
    </div>
    <router-view/>
  </div>
</template>