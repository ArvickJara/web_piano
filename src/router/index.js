import { createRouter, createWebHistory } from 'vue-router';
import GuestLayout from '@/layout/GuestLayout.vue';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import AuthView from '@/views/AuthView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Rutas con layout de invitado
    {
      path: '/',
      name: 'guest',
      component: GuestLayout,
      children: [
        { path: '', name: 'home', component: HomeView }, // Ruta raíz ("/")
        { path: 'login', name: 'login', component: LoginView }, // Ruta "/login"
        { path: 'register', name: 'register', component: RegisterView }, // Ruta "/register"
      ],
    },
    // Ruta para autenticación separada
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
    },
    // Ruta independiente para About
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
  ],
});

export default router;
