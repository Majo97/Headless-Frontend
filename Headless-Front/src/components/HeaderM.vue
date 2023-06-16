<template>
  <div class="header">
    <div class="wave-text">
      <span class="text-shadow">DevJobs</span>
    </div>
    <div class="buttons">
      <button class="btn btn-home" @click="goHome">Inicio</button>
      <button class="btn btn-back" @click="goBack">Retroceder</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/');
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #7B1FA2;
  padding: 20px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text-shadow {
  margin-left: 40px;
  font-size: 40px;
  font-weight: bold;
  text-align: left;
  font-family: 'Arial', sans-serif;
  text-shadow: 10px 10px 10px rgba(29, 26, 31, 0.5);
}

.buttons {
  display: flex;
}

.btn {
  background-color: #7B1FA2;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #8e24aa;
}

.btn-home {
  background-color: #9C27B0;
}

.btn-back {
  background-color: #673AB7;
}
</style>
