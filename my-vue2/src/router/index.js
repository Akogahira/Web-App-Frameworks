import Vue from 'vue'
import Router from 'vue-router'
import ProfilePage from '../views/ProfilePage.vue'
import PostsPage from '../views/PostsPage.vue'
import EditProfilePage from '../views/EditProfilePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/profile',
      name: 'ProfilePage',
      component: ProfilePage
    },
    {
      path: '/posts',
      name: 'PostsPage',
      component: PostsPage
    },
    {
      path: '/edit',
      name: 'EditProfilePage',
      component: EditProfilePage
    }
  ]
})
