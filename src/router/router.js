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
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
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
  },
  {
    path: "/community",
    name: "Community",
    component: CommunityPage,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
