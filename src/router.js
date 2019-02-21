import Vue from 'vue'
import VueRouter from 'vue-router'
// import Film from './views/Film.vue'
// import Cinema from './views/Cinema.vue'
// import Center from './views/Center.vue'
// import City from './views/City.vue'
// import Home from './views/Home.vue'
// import Login from './views/Login.vue'
// import Card from './views/Card.vue'
// import Money from './views/Money.vue'
// import Settings from './views/Settings.vue'
// import Detail from './views/Detail.vue'
// import FilmList from './views/FilmList'
// import JijiangFilm from './views/JijiangFilm'
Vue.use(VueRouter)
let router = new VueRouter({
  routes: [{
    path: '/',
    component: () => import('./views/Home.vue'),
    children: [{
      path: 'films',
      component: () => import('./views/Film.vue'),
      children: [{
        path: 'jijiang',
        component: () => import('./views/JijiangFilm.vue')
      },
      {
        path: 'filmList',
        component: () => import('./views/FilmList.vue')
      },
      {
        path: '',
        redirect: '/films/filmList'
      }
      ]
    },
    {
      path: 'cinemas',
      component: () => import('./views/Cinema.vue')
    },
    {
      path: 'center',
      component: () => import('./views/Center.vue')
    },
    {
      path: '',
      redirect: '/films'
    }
    ]
  },
  {
    path: '/city',
    component: () => import('./views/City.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('./views/Detail.vue')
  },
  {
    path: '/login',
    component: () => import('./views/Login.vue')
  },
  {
    path: '/card',
    component: () => import('./views/Card.vue')
  },
  {
    path: '/money',
    component: () => import('./views/Money.vue')
  },
  {
    path: '/settings',
    component: () => import('./views/Settings.vue')
  },
  {
    path: '*',
    redirect: '/films'
  }
  ]
})
router.beforeEach((to, from, next) => {
  if ((to.path === '/card' || to.path === '/money' || to.path === '/settings') && !sessionStorage.getItem('nickname')) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})
export default router
