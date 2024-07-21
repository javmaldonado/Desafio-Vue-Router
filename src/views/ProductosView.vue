<template>
  <div class="products">
    <section class="container my-5 pt-5 sec-1" id="productos">
      <h1 class=" text-center">Nuestros Productos</h1>
      <div class="row">
        <div class="col-sm-4 col-12 px-5 mb-4"></div>
        <CardComponent :nombre="nombre" :descripcion="descripcion" :precio="precio" :cantidad="cantidad" />
      </div>
    </section>
  </div>
  <router-link to='/'>Volver al inicio</router-link>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';

export default {
  name: "ProductosView",
  components: {
    CardComponent,
  },
  props: {
    descripcion: {
      type: String,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    precio: {
      type: Number,
      required: true
    },
    cantidad: {
      type: Number,
      required: true
    }
  },
}
</script>