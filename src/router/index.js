import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AccountStores from '../stores/AccountStores';

Vue.use(VueRouter)

let accountStores = new AccountStores();

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      props: { accountStores: accountStores },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import ('../views/Auth.vue')
    },

    {
      path: '/comptes',
      name: 'Comptes',
      props: { accountStores: accountStores },
      component: () => import('../views/Accounts/Account.vue')
    },
    {
      path: '/compte/:id',
      props: { accountStores },
      component: () => import('../views/Operations/Operations.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from, next);

  // Si on tombe sur la page login
  // On authorize l'accès
  /**if(to.path === '/login') {
    next();
  }**/

  // si l'utilisateur est connecté
    // affichage de la page à l'utilisateur
  // sinon on refuse l'accès a toutes les page sauf celles du login
  next();
});

export default router
