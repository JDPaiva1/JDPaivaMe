<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import SkillsComponent from '@/components/SkillsComponent.vue'
import ExperienceComponent from '@/components/ExperienceComponent.vue'
import PortfolioComponent from '@/components/PortfolioComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

import { provide, ref } from 'vue'

import en from '@/locales/en.json'
import es from '@/locales/es.json'

const data = ref({})
provide('data', data)

data.value = window.location.pathname.startsWith('/es') ? es : en;

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
