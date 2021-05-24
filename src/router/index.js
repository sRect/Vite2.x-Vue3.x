import {createRouter, createWebHistory,} from 'vue-router';

const Home = () => import('@/pages/Home.vue');
const About = () => import("@/pages/About.vue");
const Foo = () => import("@/components/Foo.vue");
const JsxCom = () => import("@/components/JsxCom.vue");

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about/:type",
      component: About,
      children: [
        // 当 /about/:type/foo 匹配成功
        {
          path: "foo",
          component: Foo,
        },
        {
          path: "jsx",
          component: JsxCom,
        },
      ],
    },
  ],
});