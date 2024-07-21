<template>
  <div class="contacto">
    <h1 class="my-5 pt-5 sec-1">Contáctanos</h1>
  </div>
  <router-link to='/'>Volver al inicio</router-link>
</template>

<script>
export default {
  name: 'ContactoView',
} 
</script>

<style>
.contacto {
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>