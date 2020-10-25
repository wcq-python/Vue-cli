import Vue from 'vue'
import Router from 'vue-router'
import index from "../components/index";
import user from "../components/user";
import check from "../components/check";
import add from "../components/add";

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          redirect: '/index',
      },
    {
      path: '/index',
      component: index,
    },
      {
          path: '/user',
          component: user,
      },
      {
          path: '/check/:id/:name/:age/:index',
          component: check,
      },
      {
          path: '/add',
          component: add,
      },
  ]
})
