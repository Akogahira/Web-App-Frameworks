<!--
<template>
  <div class="container">
    <div class="card mt-4">
      <div class="card-body text-center">
        <h2 class="card-title">Perfil de usuario</h2>
        <div class="mb-3">
          <img src="@/assets/avatar.png" alt="Avatar" class="img-fluid rounded-circle" style="width: 150px;">
        </div>
        <p class="card-text">Nombre: {{ name }}</p>
        <p class="card-text">Correo electrónico: {{ email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProfilePage',
  computed: {
    ...mapState(['name', 'email'])
  }
}
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí */
</style>
-->

<template>
  <div class="container">
    <div :class="{ 'dark-theme': isDarkTheme }" class="card mt-4">
      <div class="card-body text-center">
        <h2 :class="{ 'text-light': isDarkTheme, 'text-dark': !isDarkTheme }">Perfil de usuario</h2>
        <div class="mb-3">
          <img v-show="ImagenVisible" src="@/assets/avatar.png" alt="Avatar" class="img-fluid rounded-circle" style="width: 150px;">
        </div>
        <button class="btn" @click="ToggleImage" v-highlight="{ backgroundColor: 'yellow', color: 'black', hoverColor: 'orange', hoverTextColor: 'white' }">{{textoBoton}}</button>
        <p :class="{ 'text-light': isDarkTheme, 'text-dark': !isDarkTheme }" class="card-text">Nombre: {{ name }}</p>
        <p :class="{ 'text-light': isDarkTheme, 'text-dark': !isDarkTheme }" class="card-text">Correo electrónico: {{ email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import themeService from '../themeService';

export default {
  data(){
    return{
      ImagenVisible: true
    };
  },
  //Muestra-oculta la foto de perfil
  methods:{
    ToggleImage(){
      this.ImagenVisible = !this.ImagenVisible;
    }
  },
  name: 'ProfilePage',
  computed: {
    ...mapState(['name', 'email']),
    isDarkTheme: () => themeService.state.isDarkTheme,
    textoBoton() {
      return this.ImagenVisible ? 'Ocultar foto de perfil' : 'Mostrar foto de perfil';
    }
  }
}
</script>

<style scoped>
/* Estilos para texto */
.text-light {
  color: #fff; /* Texto claro */
}

.text-dark {
  color: #212529; /* Texto oscuro */
}

/* Estilos para fondo del tema oscuro */
.dark-theme {
  background-color: #343a40; /* Fondo oscuro */
  color: #fff; /* Texto claro */
}
</style>

