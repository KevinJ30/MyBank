<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login" class="nav-link">Connection</router-link>
      <router-link to="/comptes" class="nav-link">Consulter vos comptes</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
    </div>
    <transition name="fade" mode="out-in" appear>
      <router-view/>
    </transition>
  </div>
</template>