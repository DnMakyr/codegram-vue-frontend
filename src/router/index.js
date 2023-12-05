import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const isLogin = JSON.parse(sessionStorage.getItem('isLogin'))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: HomeView
    },
    {
      path: '/register',
      name: 'signup',
      component: () => import('../views/auth/RegisterView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import('../views/profile/ProfileView.vue'),
      props: true
    },
    {
      path: '/profile/:id/edit',
      name: 'edit-profile',
      component: () => import('../views/profile/EditProfileView.vue'),
      props: true
    },
    {
      path:'/post/:id',
      name: 'post',
      component: () => import('../components/posts/PostOverlay.vue'),
      props: true
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../views/ExploreView.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/ChatView.vue'),
    },
    {
      path:'/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    }
  ]
})

export default router
