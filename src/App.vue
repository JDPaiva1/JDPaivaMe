<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import SkillsComponent from '@/components/SkillsComponent.vue';
import ExperienceComponent from '@/components/ExperienceComponent.vue';
import PortfolioComponent from '@/components/PortfolioComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
  <HeaderComponent ref="headerRef"/>

  <main class="c-container">
    <BannerComponent />
    <AboutComponent />
    <SkillsComponent />
    <ExperienceComponent />
    <PortfolioComponent />
  </main>

  <FooterComponent />
</template>

<style>
</style>
