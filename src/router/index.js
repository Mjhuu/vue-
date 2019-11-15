import Vue from 'vue'
import VueRouter from 'vue-router'

const Error = () => import('./../pages/404/404');
const Home = () => import('./../pages/Home/Home');

Vue.use(VueRouter);

const router = new VueRouter({
  //所有路由
  routes:[
    {
      path: '/home',
      component: Home
    },
    {
      path: '/error',
      component: Error
    },
    {//默认路由
      path: '/',
      redirect: '/home'
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    from.name ? next({
      name: from.name
    }) : next('/error');
  } else {
    next(); //如果匹配到正确跳转
  }
});
export default router;
