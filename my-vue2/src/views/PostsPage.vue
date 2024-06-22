<!--
<template>
  <div class="container">
    <div class="card mt-4">
      <div class="card-body">
        <h2 class="card-title">Tus publicaciones</h2>
        <ul class="list-group">
          <li class="list-group-item" v-for="(post, index) in posts" :key="index">{{ post.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostsPage',
  data() {
    return {
      posts: [
        { title: 'Publicación 1' },
        { title: 'Publicación 2' },
        { title: 'Publicación 3' }
      ]
    };
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
      <div class="card-body">
        <h2 :style="{ color: isDarkTheme ? '#fff' : '' }">Tus publicaciones</h2>
        <ul :style="{ backgroundColor: isDarkTheme ? '#343a40' : '' }" class="list-group">
          <li class="list-group-item" v-for="(post, index) in posts" :key="index">{{ post.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import themeService from '../themeService';

export default {
  name: 'PostsPage',
  data() {
    return {
      posts: [
        { title: 'Publicación 1' },
        { title: 'Publicación 2' },
        { title: 'Publicación 3' }
      ]
    };
  },
  computed: {
    isDarkTheme: () => themeService.state.isDarkTheme
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

