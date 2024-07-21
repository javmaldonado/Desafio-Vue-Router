<template>
  <NavbarComponent />
  <router-view />
  <MediosPago />
  <FooterComponent />
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import MediosPago from './components/MediosPago.vue';
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  name: "App",
  components: {
    NavbarComponent,
    MediosPago,
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
