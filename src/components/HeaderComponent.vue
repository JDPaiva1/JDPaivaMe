<script setup lang="ts">
import { ref } from 'vue';

const isFixed = ref(false)

document.addEventListener('scroll', () => {
  isFixed.value = window.scrollY > 0
})
</script>

<template>
  <header class="header" :class="{'header--fixed': isFixed }">
    <div class="header-inner c-container">
      <!-- logo -->
      <a href="index.html" class="header-logo">
        <span>J</span> Jose Daniel Paiva
      </a>
      <!-- logo -->
      <!-- social -->
      <ul class="header-social">
        <li><a href="#" target="_blank"><i class="ri-github-fill"></i> G </a></li>
        <li><a href="#" target="_blank"><i class="ri-stack-overflow-line"></i> I </a></li>
        <li><a href="#" target="_blank"><i class="ri-linkedin-fill"></i> L </a></li>
      </ul>
      <!-- social -->
    </div>
  </header>
</template>

<style scoped>
.header {
  @apply fixed w-full top-0 z-[5] bg-white transition-all duration-400 ease-in-out delay-0 pt-4 md:py-16 px-0;
}

.header.header--fixed {
  @apply py-4 md:py-5 px-0;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
}

.header-inner {
  @apply flex justify-between items-center;
}

.header-logo {
  @apply uppercase text-[0] md:text-lg text-black tracking-widest flex items-center;
}

.header-logo span {
  @apply flex items-center justify-center w-10 h-10 bg-black rounded text-white text-2xl font-semibold text-center mr-3;
}

.header-social {
  @apply flex items-center flex-wrap;
}

.header-social li {
  @apply ml-3;
}

.header-social li:first-child {
  @apply ml-0;
}

.header-social li a {
  @apply text-white w-6 h-6 bg-primary flex justify-center items-center text-center text-base rounded-full;
}

.header-social li a:hover {
  @apply bg-black text-white;
}
</style>