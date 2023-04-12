<script setup lang="ts">
import { inject } from 'vue';

const data = inject('data') as { skills: object }
</script>

<template>
  <div class="skills">
    <section class="skills-container" v-for="(section, index) in data?.skills" :key="index">
      <h2 class="heading">{{ index }}</h2>
      <ul class="skills-list">
        <li v-for="(skill, index) in section" :key="index">
          {{ skill }}
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.skills {
  @apply md:pb-24 flex flex-wrap;
}

.skills-container {
  @apply mb-10 md:mb-0 w-full md:pr-4 last:pr-0 md:pl-4 first:pl-0 md:w-1/2;
}

.skills-list {
  @apply flex flex-wrap items-center mt-3 m-0 p-0;
}

.skills-list li {
  @apply inline-block text-grey-900 text-base bg-white border font-medium mr-4 mb-4 px-5 py-2.5 rounded-full border-solid border-grey-100;
}
</style>