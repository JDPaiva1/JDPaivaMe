<script setup lang="ts">
import { inject } from 'vue';

const data = inject('data') as { portfolio: { title: string, seemore: string, projects: [{ title: string, description: string, alt: string, image: string, url: string }] } }
</script>

<template>
  <div class="work">
    <h2 class="heading"> {{ data?.portfolio?.title }} </h2>
    <div class="work-list-section">
      <div class="work-list" v-for="(work, index) in data?.portfolio?.projects" :key="index">
        <section>
          <h3 class="work-tilte">{{ work?.title }}</h3>
          <p>{{ work?.description }}</p>
          <a :href="work?.url" class="button">{{ data?.portfolio?.seemore }}</a>
        </section>
        <figure>
          <img loading="lazy" :src="work?.image" :alt="work?.alt">
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work {
  @apply pb-8;
}

.work-list {
  @apply bg-divider mb-10 p-7 rounded-sm md:py-10 md:px-16 flex flex-wrap lg:flex-nowrap;
}

.work-list section {
  @apply pt-5 pb-8 lg:py-5 lg:pr-11 w-full lg:w-3/5;
}

.work-list figure {
  @apply w-full lg:w-2/5 lg:pl-3;
}

.work-list figure img {
  @apply w-auto h-full mx-auto rounded-sm;
}

.work-tilte {
  @apply text-black text-3xl leading-9 font-semibold mb-8;
}

.work-list p {
  @apply font-light md:text-lg leading-8 mb-4;
}

.work-list .button {
  @apply mt-5;
}
</style>