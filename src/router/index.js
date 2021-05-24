import {createRouter, createWebHistory,} from 'vue-router';

const Home = () => import('@/pages/Home.vue');
const About = () => import("@/pages/About.vue");

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});