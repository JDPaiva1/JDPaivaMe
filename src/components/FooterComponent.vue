<script setup lang="ts">
import { inject } from 'vue';

const data = inject('data') as { contact: { email: string, button: string, title: string, subtitle: string, pretitle: string } }
</script>

<template>
  <footer class="footer text-center">
    <div class="c-container">
      <section>
        <span>{{ data?.contact?.pretitle }}</span>
        <h4>{{ data?.contact?.title }}</h4>
        <p>{{ data?.contact?.subtitle }}</p>
        <a :href="`mailto:${data?.contact?.email}`" class="button">{{ data?.contact?.button }}</a>
      </section>
      <span class="footer-copyright">
        © {{ new Date().getFullYear() }} <a href="https://jdpaiva.me/">Jose Daniel Paiva</a>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  @apply bg-black px-0 py-28;
}

.footer section {
  @apply pb-24;
}

.footer section span {
  @apply text-grey-500 uppercase font-bold text-base tracking-wider block pb-5;
}

.footer section h4 {
  @apply text-white text-5xl font-bold mb-2;
}

.footer section p {
  @apply tracking-wider text-white text-lg mb-10;
}

.footer-copyright {
  @apply text-grey-500 tracking-wider text-base;
}

.footer-copyright a {
  @apply text-grey-500 hover:text-primary;
}
</style>