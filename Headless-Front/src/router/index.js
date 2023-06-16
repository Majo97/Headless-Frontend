import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PlazaDetailView from '../views/DetailView.vue';
import FormularioAplicacion from '../views/AplicationView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/plazas/:id',
      name: 'plazaDetalle',
      component: PlazaDetailView,
      props: true
    },
    {
      path: '/formulario-aplicacion/:id',
      name: 'formularioAplicacion',
      component: FormularioAplicacion,
      props: true
    }
    
    
  ]
});

export default router;


