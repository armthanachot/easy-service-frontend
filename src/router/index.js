import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import Signup from '../views/Signup.vue'
import Restaurant from '../views/Restaurant.vue'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//     children: [
//       {
//         path: 'about',
//         name: 'About',
//         component: About
//       },
//       {
//         path: 'index',
//         name: 'Index',
//         component: Index
//       },
//       {
//         path: 'signup',
//         name: 'Signup',
//         component: Signup
//       }
//     ]
//   },
//   {
//     path: '/main',
//     name: 'Main',
//     component: Login,
//     children: []
//   }
// ]
const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      requireAuth: true
    },
    children: [
      {
        name: 'Index',
        path: '',
        component: Index
      },
      {
        path: 'about-us',
        component: About
      },
      {
        path: 'restaurant',
        component: Restaurant
      }
    ]
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
    meta: {
      requireAuth: false
    }
  },
  {
    name: 'Signup',
    path: '/signup',
    component: Signup,
    meta: {
      requireAuth: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (!localStorage.getItem('token')) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    if (localStorage.getItem('token')) {
      next({ path: '/' })
    } else {
      next()
    }
  }
})

export default router
