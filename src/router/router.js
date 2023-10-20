import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import FeaturesPage from "../pages/FeaturesPage.vue";
import CommunityPage from "../pages/CommunityPage.vue";
import BlogPage from "../pages/BlogPage.vue";
import AboutPage from "../pages/AboutPage.vue";
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
