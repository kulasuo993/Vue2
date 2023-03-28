// 导入Vue和VueRouter，让vue.use(VueRouter)
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 1.定义路由组件
import NewView from '../views/NewView.vue'



const routes = [
  {
    path: '/',
    name: 'new',
    component: NewView,
    children:[{
      path: '/buy/:id?',
      name: 'buy',
      component: () => import(/* webpackChunkName: "about" */ '../views/BuyView.vue'),
    },
    {
      path: '/buybox',
      name: 'buybox',
      component: () => import(/* webpackChunkName: "about" */ '../views/BuyboxView.vue'),
    },
    {
      path: '/buynew',
      name: 'buynew',
      component: () => import(/* webpackChunkName: "about" */ '../views/BuyNewView.vue'),
    },
    {
      path: '/Login/:id?',
      name: 'Login',
      component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
      
    },
    {
      path: '/list',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
    },{
      path: '/ShengMingZhouQi',
      name: 'ShengMingZhouQi',
      component: () => import(/* webpackChunkName: "about" */ '../views/ShengMingZhouQi.vue'),
    }
    ,{
      path: '/VueText',
      name: 'VueText',
      component: () => import(/* webpackChunkName: "about" */ '../views/VueTextView.vue'),
    },
    {
      path: '/Chacao',
      name: 'Chacao',
      component: () => import(/* webpackChunkName: "about" */ '../views/Chacao.vue'),
    },
    {
      path: '/ChaCaoNew',
      name: 'ChaCaoNew',
      component: () => import(/* webpackChunkName: "about" */ '../views/ChacaoNew.vue'),
    },
    {
      path: '/ChaCaoNew1',
      name: 'ChaCaoNew1',
      component: () => import(/* webpackChunkName: "about" */ '../views/ChacaoNew1.vue'),
    },
    {
      path: '/Directives',
      name: 'Directives',
      component: () => import(/* webpackChunkName: "about" */ '../views/Directives.vue'),
    },]
  },
  {
    path:'*',
    name:'notFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue'),
  }
  
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to,from,next)=>{
//   if(to.path !== '/Login'){
//     if(window.loginType){
//       next()
//     }else{
//       next('/Login')
//     }
//   }
//   next()
// })



export default router
