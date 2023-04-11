<template>
  <div class="banner">
    <div class="banner-img-section">
      <figure>
        <img
          class="banner-img"
          src="https://firebasestorage.googleapis.com/v0/b/jdpaiva1-me.appspot.com/o/p1.jpg?alt=media&token=bd6a9290-c686-49fb-ba90-6a80f2ff300e"
          loading="lazy"
        />
      </figure>
    </div>
    <section class="banner-text-section">
      <h1 class="banner-title">
        <span>HI THERE</span>
        I’m Jose Daniel Paiva <br /> FrontEnd Developer based in Spain.
      </h1>
      <ul class="banner-numbervalulist">
        <li>
          <strong>6+</strong>
          <span>Experience</span>
        </li>
        <li>
          <strong>89</strong>
          <span>Projects</span>
        </li>
        <li>
          <strong>52</strong>
          <span>Happy Clients</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.banner {
  @apply flex flex-wrap mt-24 md:mt-[168px];
}
.banner-img-section {
  @apply w-full md:w-2/5 md:pr-3;
}
.banner figure {
  @apply py-8 md:py-0 w-full;
}
.banner-img {
  @apply object-cover aspect-[0.876] rounded-3xl;
}
.banner-text-section {
  @apply w-full md:w-3/5 px-0 md:pl-20 md:pr-28;
}

.banner-title span {
  @apply block uppercase tracking-wider font-medium text-base pb-2 md:pt-5 md:pb-11 md:leading-snug;
}

.banner-title {
  @apply font-semibold text-3xl md:text-5xl leading-10 md:leading-tight text-black;
}

.banner-numbervalulist {
  @apply flex items-center flex-wrap mt-5 md:mt-16 m-0 p-0;
}

.banner-numbervalulist li {
  @apply mr-8 md:mr-16;
}
.banner-numbervalulist li:last-child {
  @apply mr-0;
}

.banner-numbervalulist strong {
  @apply block text-primary text-3xl md:text-4xl font-extrabold;
}

.banner-numbervalulist span {
  @apply text-sm md:text-base tracking-wider;
}
</style>