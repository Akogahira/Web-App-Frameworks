<!--
<template>
  <div class="container">
    <header>
      <h1>Bienvenido</h1>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/profile" active-class="active">Perfil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/posts" active-class="active">Publicaciones</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/edit" active-class="active">Editar perfil</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderApp'
}
</script>

<style scoped>
</style>
-->



<template>
  <div class="container">
    <header :class="{ 'dark-theme': isDarkTheme }">
      <div class="d-flex justify-content-between align-items-center">
        <h1>Bienvenido</h1>
        <!-- Botón para cambiar tema -->
        <button class="btn btn-info text-white" @click="toggleTheme">Cambiar Tema</button>
      </div>
      <nav class="navbar navbar-expand-lg" :class="{ 'navbar-dark bg-dark': isDarkTheme, 'navbar-light bg-light': !isDarkTheme }">
        <div class="container-fluid">
          <!-- Navbar links -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" :class="{ 'text-white': isDarkTheme }" to="/profile" active-class="active">Perfil</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :class="{ 'text-white': isDarkTheme }" to="/posts" active-class="active">Publicaciones</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :class="{ 'text-white': isDarkTheme }" to="/edit" active-class="active">Editar perfil</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import themeService from '../themeService';

export default {
  name: 'HeaderApp',
  setup() {
    const { state, toggleTheme } = themeService;

    return {
      isDarkTheme: state.isDarkTheme,
      toggleTheme
    };
  }
}
</script>

<style scoped>
/* Estilos específicos para el tema oscuro y claro */
.dark-theme {
  background-color: #333; /* Fondo oscuro */
  color: #fff; /* Texto claro */
}

.dark-theme .navbar-light {
  background-color: #4a5158 !important; /* Fondo oscuro */
  color: #fff !important; /* Texto claro */
}

.dark-theme .navbar-dark {
  background-color: #4a5158 !important; /* Fondo oscuro */
  color: #fff !important; /* Texto claro */
}

.dark-theme .nav-link {
  color: #fff !important; /* Color de texto blanco para los enlaces */
}
</style>
