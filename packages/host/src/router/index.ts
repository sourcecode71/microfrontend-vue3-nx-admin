import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Home',
      component: {
        template: '<div>Home Component Works!</div>',
        beforeCreate() {
          console.log('Home component is created');
        }
      },
    },
    {
      path: '/reg',
      name: 'Registration',
      component: {
        template: '<div>Registration Component Works!</div>',
        beforeCreate() {
          console.log('Registration component is created');
        }
      },
    }
  ];
  
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
