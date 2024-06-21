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
