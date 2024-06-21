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
