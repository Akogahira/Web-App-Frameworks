<!--
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
-->



<template>
  <div id="app" :class="{ 'dark-theme': isDarkTheme }">
    <HeaderApp />
    <router-view />
    <FooterApp />
  </div>
</template>

<script>
import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';
import themeService from './themeService';

export default {
  name: 'App',
  components: {
    HeaderApp,
    FooterApp
  },
  computed: {
    isDarkTheme() {
      return themeService.state.isDarkTheme;
    }
  },
  watch: {
    'themeService.state.isDarkTheme': {
      handler(newVal) {
        if (newVal) {
          document.body.classList.add('dark-theme');
        } else {
          document.body.classList.remove('dark-theme');
        }
      },
      immediate: true // Aplica el tema inicial al montar el componente
    }
  }
};
</script>

<style>
/* Estilos globales para el tema oscuro */
body.dark-theme {
  background-color: #333;
  color: white;
}

body.dark-theme .navbar-dark .nav-link {
  color: white;
}
</style>

