import { createRouter, createWebHistory } from "vue-router";

// Layouts
import GuestLayout from "@/layout/GuestLayout.vue";
import NavBarLayout from "@/layout/NavBarLayout.vue";

// Vistas
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import HistoriaView from "@/views/HistoriaView.vue";
import ProfileUserView from "@/views/ProfileUserView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Rutas para usuarios no autenticados (GuestLayout)
    {
      path: "/",
      component: GuestLayout,
      children: [
        { path: "/", name: "login", component: LoginView },
        { path: "register", name: "register", component: RegisterView },
      ],
    },

    {
      path: "/",
      component: NavBarLayout,
      children: [
        { path: "perfil", name: "perfil", component: ProfileUserView },
        { path: "historia", name: "historia", component: HistoriaView },
      ],
    },

    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
  ],
});

export default router;
