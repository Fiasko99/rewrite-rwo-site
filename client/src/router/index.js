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
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
