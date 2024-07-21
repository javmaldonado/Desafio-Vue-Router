import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

// Es un arreglo de objetos donde cada objeto define una ruta específica en la aplicación //
const routes = [
  {
    // "/" Es la ruta principal //
    path: "/", 
    name: "home",
    component: HomeView,
  },
  {
     // Es un ruta dinamica,carga solo cuando se navega en la ruta //
    path: "/productos",
    name: "productos",
    component: () => import("../views/ProductosView.vue"),

    // En este caso se incluyen props para llenar el contenido de la card//
    props: {
      nombre: "Desayunos",
      descripcion: "Contamos con desayunos nutritivos y deliciosos",
      precio: "Precio:$2000",
      cantidad: "Cantidad: Para dos personas",
    },
  },

  {
    path: "/contacto",
    name: "contacto",
    component: () => import("../views/ContactoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Exporta el router configurado para que pueda ser utilizado en la aplicación principal de Vue //
export default router;
