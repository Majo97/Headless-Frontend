<template>
    <HeaderM/>
    <div class="container">
        <h1 class="title">Detalle de Plaza</h1>
        <div v-if="plaza">
            <div class="card">
                <img :src="plaza.image" class="card-img-top" alt="Imagen de la plaza">
                <div class="card-body">
                    <h2 class="card-subtitle">Información de la Plaza</h2>
                    <div class="info-section">
                        <h5 class="info-title">Título</h5>
                        <p class="info-value">{{ plaza.title }}</p>
                    </div>
                    <div class="info-section">
                        <h5 class="info-title">Tipo</h5>
                        <p class="info-value">{{ plaza.type }}</p>
                    </div>
                    <div class="info-section">
                        <h5 class="info-title">Dirección</h5>
                        <p class="info-value">{{ plaza.address }}</p>
                    </div>
                    <div class="info-section">
                        <h5 class="info-title">Descripción</h5>
                        <p class="info-value">{{ plaza.description }}</p>
                    </div>
                    <div class="info-section">
                        <h5 class="info-title">Requisitos</h5>
                        <p class="info-value">{{ plaza.requirements }}</p>
                    </div>
                    <div class="info-section">
                        <h5 class="info-title">Responsabilidades</h5>
                        <p class="info-value">{{ plaza.responsibilities }}</p>
                    </div>
                    <h2 class="card-subtitle">Información de la Empresa</h2>
                    <div class="info-section">
                        <h5 class="info-title">Nombre de la Empresa</h5>
                        <p class="info-value">{{ plaza.company.name }}</p>
                    </div>
                    <div class="info-section">
                        <h5 class="info-title">Sitio web de la Empresa</h5>
                        <p class="info-value"><a :href="plaza.company.website">{{ plaza.company.website }}</a></p>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="card-footer">
                        <router-link :to="{ name: 'formularioAplicacion', params: { id: id } }"
                            class="btn btn-primary btn-block">
                            Aplicar a Plaza
                        </router-link>
                    </div>

                </div>
            </div>
        </div>
        <div v-else>
            <p>Cargando detalle de la plaza...</p>
        </div>
    </div>
    <footerM></footerM>
</template>
  
<script>
import axios from 'axios';
import HeaderM from '../components/HeaderM.vue'
import footerM from '../components/FooterM.vue'

export default {
    components: {
    HeaderM,
    footerM
  },
    props: ['id'],
    data() {
        return {
            plaza: null
        };
    },
    mounted() {
        this.fetchPlaza();
    },
    methods: {
        fetchPlaza() {
            const apiUrl = `http://localhost/api/job-positions/${this.id}`;

            axios.get(apiUrl)
                .then(response => {
                    this.plaza = response.data;
                })
                .catch(error => {
                    console.error(error);
                    // Manejar el error y mostrar un mensaje de error al usuario
                });
        }
    }
};
</script>
  
<style scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.title {
    font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #27037b;
  font-family: 'Arial', sans-serif;
  text-shadow: 5px 5px 5px rgba(138, 125, 146, 0.5);
}

.card {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 30px;
}

.card-img-top {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
}

.card-subtitle {
    font-size: 24px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 15px;
}

.info-section {
    margin-bottom: 20px;
}

.info-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

.info-value {
    font-size: 16px;
    margin-top: 5px;
}

.btn-primary {
    background-color: #7B1FA2;
    color: #FFF;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    width: 100%;
}

.btn-block {
    display: block;
    margin-top: 20px;
}
</style>
  