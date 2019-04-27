import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
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
    path: '/selectCinema',
    name: 'selectFilm',
    component: () => import('./views/SelectCinema/SelectCiname.vue')
  },
  {
    path: '/choiceFilm/:id',
    name: 'choiceFilm',
    component: () => import('./views/ChoiceFilm/ChoiceFilm.vue'),
    children: [
      {
        path: '27day',
        component: () => import('./views/ChoiceFilm/filmTime/27day.vue')
      },
      {
        path: '28day',
        component: () => import('./views/ChoiceFilm/filmTime/28day.vue')
      },
      {
        path: '29day',
        component: () => import('./views/ChoiceFilm/filmTime/29day.vue')
      }
    ]
  },
  {
    path: '/choiceChair:id',
    name: 'choiceChair',
    component: () => import('./views/ChoiceChair/ChoiceChair.vue')
  },
  {
    path: '/isokOrder:id',
    name: 'isokOrder',
    component: () => import('./views/isokOrder/isokOrder.vue')
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
  // 调用 NProgress.start();
  NProgress.start()
  let nickname = sessionStorage.getItem('nickname')
  let list = ['/card', '/money', '/settings']
  if (list.indexOf(to.path) > -1 || to.name === 'isokOrder' && !nickname) {
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
