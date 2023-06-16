<script setup>
import { RouterLink, RouterView } from 'vue-router'
import plazas from '../components/PlazasList.vue'
import headerM from '../components/HeaderM.vue'
import footerM from '../components/FooterM.vue'
</script>
<template>
  <main>
    <headerM></headerM>
    <plazas/>
    <footerM></footerM>
  </main>
</template>
