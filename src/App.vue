<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import SkillsComponent from '@/components/SkillsComponent.vue'
import ExperienceComponent from '@/components/ExperienceComponent.vue'
import PortfolioComponent from '@/components/PortfolioComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

import { provide, ref } from 'vue'
import { getKeys } from '@/firebase.config'

// const lang = window.location.pathname === '/' ? 'en' : 'es'
const data = ref({})
provide('data', data)

getKeys('test').then(snapshot => {
  data.value = snapshot as object
}).catch(error => {
  console.log('app error', error);
})
</script>

<template>
  <HeaderComponent />

  <main class="c-container">
    <BannerComponent />
    <AboutComponent />
    <SkillsComponent />
    <ExperienceComponent />
    <PortfolioComponent />
  </main>

  <FooterComponent />
</template>

<style></style>
