<template>
  <div class="container">
    <h1 class="text-center my-4">Listado de Plazas</h1>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="plaza in plazas" :key="plaza.position_id">
        <div class="card">
          <div class="image-container">
            <img :src="plaza.image" alt="Plaza Image" class="image">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ plaza.title }}</h5>
            <div class="card-content">
              <p class="card-info"><span class="card-info-label">Dirección:</span> {{ plaza.address }}</p>
              <p class="card-info"><span class="card-info-label">Tipo de trabajo:</span> {{ plaza.Job_type }}</p>
              <p class="card-info"><span class="card-info-label">Empresa:</span> {{ plaza.company_name }}</p>
            </div>
            <router-link :to="{ name: 'plazaDetalle', params: { id: plaza.position_id } }"
              class="btn btn-primary btn-block">Ver Detalle</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination-container">
      <button v-if="currentPage > 1" @click="goToPreviousPage" class="btn btn-primary">Anterior</button>
      <span class="page-info">Página {{ currentPage }} de {{ totalPages }}</span>
      <button v-if="currentPage < totalPages" @click="goToNextPage" class="btn btn-primary">Siguiente</button>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';


export default {
  data() {
    return {
      plazas: [],
      currentPage: 1,
      totalPages: 1
    };
  },
  mounted() {
    this.fetchPlazas();
  },
  methods: {
    fetchPlazas() {
      const perPage = 6;
      const apiUrl = `http://localhost/api/index/${perPage}?page=${this.currentPage}`;

      axios.get(apiUrl)
        .then(response => {
          this.plazas = response.data.data;
          this.currentPage = response.data.current_page;
          this.totalPages = response.data.last_page;
        })
        .catch(error => {
          console.error(error);
          // Manejar el error y mostrar un mensaje de error al usuario
        });
    },
    goToPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchPlazas();
      }
    },
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchPlazas();
      }
    }
  }
};
</script>
  
<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px;
}

h1 {
  font-size: 40px;
  font-weight: bold;
  text-align: left;
  color: #27037b;
  font-family: 'Arial', sans-serif;
  text-shadow: 5px 5px 5px rgba(138, 125, 146, 0.5);
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.image-container {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
}

.card-content {
  flex-grow: 1;
}

.card-info {
  margin-bottom: 8px;
  font-size: 14px;
}

.card-info-label {
  font-weight: bold;
}

.btn-primary {
  background-color: #8257e5;
  color: #fff;
  border: none;
}

.btn-primary:hover {
  background-color: #684ed9;
}

.pagination-container {
  margin-top: 20px;
  text-align: center;
}

.page-info {
  margin: 0 10px;
  font-size: 14px;
  font-weight: bold;
}
</style>
  