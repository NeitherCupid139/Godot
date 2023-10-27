import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import FeaturesPage from "../pages/FeaturesPage.vue";
import CommunityPage from "../pages/CommunityPage.vue";
import BlogPage from "../pages/BlogPage.vue";
import AboutPage from "../pages/AboutPage.vue";
import About1 from "../pages/about/About1.vue";
import About2 from "../pages/about/About2.vue";
import About3 from "../pages/about/About3.vue";
import About4 from "../pages/about/About4.vue";
import About5 from "../pages/about/About5.vue";
import About6 from "../pages/about/About6.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      title: "Godot Engine - Free and open source 2D and 3D game engine",
    },
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
    meta: {
      title: "About - Godot Engine",
    },
    redirect: "/about1",
    children: [
      {
        path: "/about1",
        name: "About1",
        component: About1,
      },
      {
        path: "/about2",
        name: "About2",
        component: About2,
      },
      {
        path: "/about3",
        name: "About3",
        component: About3,
      },
      {
        path: "/about4",
        name: "About4",
        component: About4,
      },
      {
        path: "/about5",
        name: "About5",
        component: About5,
      },
      {
        path: "/about6",
        name: "About6",
        component: About6,
      },
    ],
  },

  {
    path: "/features",
    name: "Features",
    component: FeaturesPage,
    meta: {
      title: "Features - Godot Engine",
    },
  },
  {
    path: "/community",
    name: "Community",
    component: CommunityPage,
    meta: {
      title: "Community - Godot Engine",
    },
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogPage,
    meta: {
      title: "Blog - Godot Engine",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title; // 设置标题为当前路由的 meta.title 字段
  next();
});
export default router;
