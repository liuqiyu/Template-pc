import Vue from 'vue';
import Router from 'vue-router';
const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'HelloWorld');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
