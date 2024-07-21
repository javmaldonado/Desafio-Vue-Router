<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container-fluid">
      <router-link to='/'><img class="navbar-brand" src="../assets/logo.png" alt="logo-suricata" /></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto gap-3">
          <router-link to="/">Inicio</router-link>
          <router-link to="/productos">Productos</router-link>
          <router-link to="/contacto">Contacto</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
}
</script>


<style>
.navbar {
  background-color: #e83e8c;
}

#navbarNavAltMarkup {
  margin-right: 30px;

}

.navbar-brand {
  height: 75px;
  margin-left: 30px;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #f9f9f9;
  text-decoration: none;
}
</style>