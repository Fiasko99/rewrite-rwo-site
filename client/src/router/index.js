import Vue from 'vue'
import VueRouter from 'vue-router'

// import store from "../store/index";

Vue.use(VueRouter)

// const ifNotAuthenticated = (to, from, next) => {
//   if (!store.getters.isAuthenticated) {
//     next();
//     return;
//   }
//   next("/choose");
// };

// const ifAuthenticated = (to, from, next) => {
//   if (store.getters.isAuthenticated) {
//     next();
//     return;
//   }
//   next("/");
// };

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/content',
    name: 'Content',
    component: () => import('../views/Content.vue')
  },
  {
    path: '/reg',
    name: 'Registrarion',
    component: () => import('../views/Registrarion.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/HelpForm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
