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
