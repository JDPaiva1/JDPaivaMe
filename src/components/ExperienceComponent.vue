<script setup lang="ts">
import { inject } from 'vue';

const data = inject('data') as {
  experience: {
    title: string,
    items: [{ years: string, title: string, company: string, description: string, bulletPoints: Array<string> }]
  } }
</script>

<template>
  <div class="experience">
    <h2 class="heading">{{ data?.experience?.title }}</h2>
    <div class="experience-list-wrapper" v-if="data?.experience?.items?.length > 0">
      <section class="experience-list" v-for="(exp, index) in data.experience.items" :key="index">
        <span class="experience-year">{{ exp?.years }}</span>
        <h3 class="experience-officename">{{ exp?.title }}</h3>
        <span class="experience-department">{{ exp?.company }}</span>
        <p class="experience-description">
          {{ exp?.description }}
        </p>
        <ul v-if="exp?.bulletPoints">
          <li v-for="(point, index) in exp?.bulletPoints" :key="index">{{ point }}</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.experience {
  @apply md:pb-24;
}

.experience-list-wrapper {
  @apply pt-4 flex flex-wrap md:flex-nowrap;
}

.experience-list {
  @apply w-full md:pr-20 last:pr-0 mb-10 md:mb-0;
}

.experience-officename {
  @apply text-2xl font-light mb-2.5;
}

.experience-list span {
  @apply block;
}

span.experience-year {
  @apply text-grey-900 text-sm font-bold pb-2.5;
}

span.experience-department {
  @apply text-grey-900 font-medium text-lg pb-8;
}

.experience-list .experience-description {
  @apply text-base leading-6 font-light mb-4;
}

.experience-list ul {
  @apply m-0 pt-2.5 p-0;
  list-style: none;
}

.experience-list ul li {
  @apply text-base leading-6 font-light relative mb-5 pl-7;
}

.experience-list ul li::before {
  @apply content-empty absolute w-2 h-2 bg-grey-900 rounded-full left-0 top-2.5;
}
</style>