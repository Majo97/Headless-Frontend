<template>
    <headerM/>
  <div class="container">
    <h1 class="title">Aplicar a Plaza</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="formData.name" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="last_name">Apellido:</label>
        <input type="text" id="last_name" v-model="formData.last_name" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="formData.email" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="cv">Currículum:</label>
        <div class="file-input-container">
          <input type="file" id="cv" ref="cv" accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" class="form-control" required @change="handleFileChange">
          <label for="cv" class="file-input-label">Seleccionar archivo</label>
        </div>
      </div>
      <div class="form-group">
        <input type="checkbox" id="privacy_consent" v-model="formData.privacy_consent" true-value="1" false-value="0" required>
        <label for="privacy_consent" class="checkbox-label">Acepto los términos y condiciones de privacidad</label>
      </div>
      <button type="submit" class="btn btn-primary">Enviar solicitud</button>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderM from '../components/HeaderM.vue';


export default {
  components: {
    HeaderM
  },
  props: ['id'],
  data() {
    return {
      formData: {
        position_id: '',
        name: '',
        last_name: '',
        email: '',
        cv: null,
        privacy_consent: false
      },
      successMessage: '',
      errorMessage: ''
    };
  },
  mounted() {
    this.formData.position_id = this.id;
  },
  methods: {
    submitForm() {
      const apiUrl = 'http://localhost/api/aplication';
      const formData = new FormData();
      formData.append('position_id', this.formData.position_id);
      formData.append('name', this.formData.name);
      formData.append('last_name', this.formData.last_name);
      formData.append('email', this.formData.email);
      formData.append('cv', this.formData.cv);
      formData.append('privacy_consent', this.formData.privacy_consent ? '1' : '0');

      axios
        .post(apiUrl, formData)
        .then(response => {
          console.log(response.data);
          this.successMessage = '¡Solicitud enviada con éxito!';
          this.errorMessage = '';
          this.resetForm();
        })
        .catch(error => {
          console.error(error.response);
          console.log(error.response.data);

          if (error.response && error.response.data && error.response.data.message) {
            this.errorMessage = `Ha ocurrido un error: ${error.response.data.message}`;
          } else {
            this.errorMessage = 'Ha ocurrido un error al enviar la solicitud. Por favor, inténtalo nuevamente.';
          }

          this.successMessage = '';
        });
    },
    handleFileChange(event) {
      this.formData.cv = event.target.files[0];
    },
    resetForm() {
      this.formData.name = '';
      this.formData.last_name = '';
      this.formData.email = '';
      this.formData.cv = null;
      this.formData.privacy_consent = false;
    }
  }
};
</script>

<style scoped>

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: #7B1FA2;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.file-input-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.file-input-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #7B1FA2;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s;
}

.file-input-label:hover {
  background-color: #5B0C8F;
}

.checkbox-label {
  margin-left: 5px;
  font-size: 14px;
  color: #333;
}

.btn-primary {
  background-color: #7B1FA2;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
}

.success-message {
  color: green;
  margin-top: 10px;
  font-size: 16px;
}

.error-message {
  color: red;
  margin-top: 10px;
  font-size: 16px;
}
</style>
