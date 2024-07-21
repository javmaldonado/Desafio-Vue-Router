<template>
  <section class="container" id="productos">
    <div class="row">
      <div class="col-sm-4 col-12 px-5 mb-4">
        <div class="card">
          <img src="../assets/img/desayunos.jpg" class="card-img-top" alt="colaciones" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ nombre }}</h5>
            <p class="card-text">
              {{ descripcion }}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ precio }} precio</li>
            <li class="list-group-item">{{ cantidad }} unidades</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Ver más</a>
            <a href="#" class="card-link">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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