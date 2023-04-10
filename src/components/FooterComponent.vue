<template>
  <footer class="footer text-center">
    <div class="c-container">
      <section>
        <span>Stay in touch</span>
        <h4>Ready to talk?</h4>
        <p>Feel free to contact us</p>
        <a href="mailto:test@test.com" class="button">Lets Talk</a>
      </section>
      <span class="footer-copyright">
        © {{ new Date().getFullYear() }} <a href="https://jdpaiva.me/" target="_blank">Jose Daniel Paiva</a>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  @apply bg-black px-0 py-[120px];
}

.footer section {
  @apply pb-[97px];
}

.footer section span {
  @apply text-[rgba(255,255,255,0.5)] uppercase font-bold text-base tracking-[1px] block pb-5;
}

.footer section h4 {
  @apply text-white text-5xl font-bold;
}

.footer section p {
  @apply tracking-[1.13px] text-white text-lg mb-10;
}

.footer-copyright {
  @apply text-[rgba(255,255,255,0.5)] tracking-[1px] text-base;
}

.footer-copyright a {
  @apply text-[rgba(255,255,255,0.5)] hover:text-[#F26464];
}</style>