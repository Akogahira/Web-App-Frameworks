<!--
<template>
  <div class="container">
    <div class="card mt-4">
      <div class="card-body">
        <h2 class="card-title">Editar Perfil</h2>
        <form @submit.prevent="onSaveChanges">
          <div class="mb-3">
            <label for="name" class="form-label">Nombre:</label>
            <input type="text" id="name" class="form-control" v-model="localName" name="name">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico:</label>
            <input type="email" id="email" class="form-control" v-model="localEmail" name="email">
          </div>
          <button type="submit" class="btn btn-primary">Guardar cambios</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'EditProfilePage',
  data() {
    return {
      localName: this.name,
      localEmail: this.email
    }
  },
  computed: {
    ...mapState(['name', 'email'])
  },
  methods: {
    ...mapActions(['updateName', 'updateEmail']),
    onSaveChanges() {
      this.updateName(this.localName)
      this.updateEmail(this.localEmail)
      // Aquí puedes agregar lógica adicional para manejar el guardado
    }
  },
  watch: {
    name(newVal) {
      this.localName = newVal;
    },
    email(newVal) {
      this.localEmail = newVal;
    }
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
      <div :class="{ 'dark-theme-card-body': isDarkTheme }" class="card-body">
        <h2 :style="{ color: isDarkTheme ? '#fff' : '' }" class="card-title">Editar Perfil</h2>
        <form @submit.prevent="onSaveChanges">
          <div class="mb-3">
            <label :style="{ color: isDarkTheme ? '#fff' : '' }" for="name" class="form-label">Nombre:</label>
            <input :style="{ backgroundColor: isDarkTheme ? '#495057' : '' }" type="text" id="name" class="form-control" v-model="localName" name="name">
          </div>
          <div class="mb-3">
            <label :style="{ color: isDarkTheme ? '#fff' : '' }" for="email" class="form-label">Correo electrónico:</label>
            <input :style="{ backgroundColor: isDarkTheme ? '#495057' : '' }" type="email" id="email" class="form-control" v-model="localEmail" name="email">
          </div>
          <button :style="{ backgroundColor: isDarkTheme ? '#343a40' : '' }" type="submit" class="btn btn-info text-white">Guardar cambios</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import themeService from '../themeService';

export default {
  name: 'EditProfilePage',
  data() {
    return {
      localName: this.name,
      localEmail: this.email
    };
  },
  computed: {
    ...mapState(['name', 'email']),
    isDarkTheme: () => themeService.state.isDarkTheme
  },
  methods: {
    ...mapActions(['updateName', 'updateEmail']),
    onSaveChanges() {
      this.updateName(this.localName);
      this.updateEmail(this.localEmail);
      // Puedes agregar lógica adicional para manejar el guardado aquí
    }
  },
  watch: {
    name(newVal) {
      this.localName = newVal;
    },
    email(newVal) {
      this.localEmail = newVal;
    }
  }
};
</script>

<style scoped>
/* Estilos para el tema oscuro */
.dark-theme {
  background-color: #343a40; /* Fondo oscuro */
  color: #fff; /* Texto claro */
}

.dark-theme .card-body {
  background-color: #343a40; /* Fondo oscuro para card-body */
}

.dark-theme .form-label {
  color: #fff; /* Texto blanco para etiquetas */
}

.dark-theme input.form-control {
  background-color: #495057; /* Fondo gris más claro para inputs en tema oscuro */
  color: #fff; /* Texto blanco para inputs en tema oscuro */
}

.dark-theme .btn-primary {
  background-color: #343a40; /* Fondo oscuro para botón */
}
</style>
