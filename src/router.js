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
    component: () => import('./views/Home/Home.vue'),
    children: [{
      path: 'films',
      component: () => import('./views/Home/Film/Film.vue'),
      children: [{
        path: 'jijiang',
        component: () => import('./views/Home/Film/Filmshangying/JijiangFilm.vue')
      },
      {
        path: 'filmList',
        component: () => import('./views/Home/Film/Filmshangying/FilmList.vue')
      },
      {
        path: '',
        redirect: '/films/filmList'
      }
      ]
    },
    {
      path: 'cinemas',
      component: () => import('./views/Home/Cinema/Cinema.vue')
    },
    {
      path: 'center',
      component: () => import('./views/Home/Center/Center.vue')
    },
    {
      path: '',
      redirect: '/films'
    }
    ]
  },
  {
    path: '/city',
    component: () => import('./views/City/City.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('./views/Detail/Detail.vue')
  },
  {
    path: '/login',
    component: () => import('./views/Login/Login.vue')
  },
  {
    path: '/card',
    component: () => import('./views/Card/Card.vue')
  },
  {
    path: '/money',
    component: () => import('./views/Money/Money.vue')
  },
  {
    path: '/settings',
    component: () => import('./views/Settings/Settings.vue')
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
