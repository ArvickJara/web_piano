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
import RankingView from "@/views/RankingView.vue";
import JugarView from "@/views/JugarView.vue";
import NivelesView from "@/views/NivelesView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Rutas para usuarios no autenticados (GuestLayout)
    {
      path: "/",
      component: GuestLayout,
      children: [
        { path: "", name: "login", component: LoginView },
        { path: "register", name: "register", component: RegisterView },
      ],
    },

    // Rutas protegidas que requieren un NavBarLayout
    {
      path: "/",
      component: NavBarLayout,
      children: [
        { path: "perfil", name: "perfil", component: ProfileUserView },
        { path: "historia", name: "historia", component: HistoriaView },
        { path: "ranking", name: "ranking", component: RankingView },
        { path: "juego", name: "juego", component: JugarView },
        { path: "niveles", name: "niveles", component: NivelesView },
        { path: "", name: "home", component: HomeView }, // Ruta de inicio por defecto
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
