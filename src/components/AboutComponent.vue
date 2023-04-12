<script setup lang="ts">
import { inject } from 'vue';

const data = inject('data') as { about: { title: string, description: string, button?: string, link?: string } }
</script>

<template>
  <div class="about">
    <section>
      <h2 class="heading">{{ data?.about?.title }}</h2>
      <p v-html="data?.about?.description"></p>
      <div v-if="data?.about?.button" class="text-center">
        <a :href="data?.about?.link" class="button">{{ data?.about?.button }}</a>
      </div>
    </section>
  </div>
</template>

<style>
.about {
  @apply py-16 md:pb-28;
}

.about p {
  @apply text-grey-900 text-base md:text-2xl leading-8 md:leading-10 font-light mb-8 md:mb-16;
}

.about-arrow-button i {
  @apply inline-block align-middle;
}
</style>