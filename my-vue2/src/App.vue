<template>
  <div id="app">
    <HeaderApp />
    <router-view />
    <FooterApp />
  </div>
</template>

<script>
import HeaderApp from './components/HeaderApp.vue'
import FooterApp from './components/FooterApp.vue'

export default {
  name: 'App',
  components: {
    HeaderApp,
    FooterApp
  }
}
</script>

<style>
</style>
