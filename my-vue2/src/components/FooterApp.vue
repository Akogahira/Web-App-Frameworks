<!--
<template>
  <div class="container mt-4">
    <footer class="footer mt-auto py-3 bg-light">
      <div class="container">
        <p class="text-muted mb-0">Contacto: contactomiapp.com</p>
        <p class="text-muted mb-0">&copy; 2024 Mi Aplicación</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterApp'
}
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí */
</style>
-->



<template>
  <div class="container mt-4">
    <footer :class="{ 'dark-theme': isDarkTheme }" class="footer mt-auto py-3">
      <div class="container">
        <p class="text-muted mb-0">Contacto: contactomiapp.com</p>
        <p class="text-muted mb-0">&copy; 2024 Mi Aplicación</p>
      </div>
    </footer>
  </div>
</template>

<script>
import themeService from '../themeService';

export default {
  name: 'FooterApp',
  setup() {
    const { state } = themeService;

    return {
      isDarkTheme: state.isDarkTheme
    };
  }
}
</script>

<style scoped>
.footer {
  background-color: #f8f9fa; /* Fondo claro por defecto */
  color: #212529; /* Texto oscuro por defecto */
}

.dark-theme .footer {
  background-color: #4a5158; /* Fondo oscuro para tema oscuro */
  color: #fff !important; /* Texto claro para tema oscuro */
}
</style>


