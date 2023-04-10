<template>
  <div class="banner">
    <div class="w-full pr-4 pl-4 lg:pl-0 md:w-2/5 lg:w-2/5 xl:w-2/5">
      <figure>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/jdpaiva1-me.appspot.com/o/about.jpg?alt=media&token=50bcdabe-d36d-4ff5-805a-6ec1bbc41c2f">
      </figure>
    </div>
    <div class="w-full pr-4 pl-4 md:w-3/5 lg:w-3/5 xl:w-3/5">
      <section>
        <h1>
          <span>HI THERE</span>
          I’m Jose Daniel Paiva <br/> FrontEnd Developer based in Spain.
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
  </div>
</template>

<style scoped>
.banner {
  @apply flex flex-wrap mt-24 md:mt-[168px];
}
.banner figure {
  @apply py-[30px] md:py-0;
}
.banner section {
  @apply px-0 md:pl-[70px] md:pr-[100px] lg:pr-0;
}

.banner section h1 span {
  @apply block uppercase tracking-[1px] font-medium text-base pb-0 md:pb-8;
}

.banner section h1 {
  @apply font-semibold text-3xl md:text-5xl leading-10 md:leading-[60px] text-black;
}

.banner-numbervalulist {
  @apply flex items-center flex-wrap mt-5 md:mt-[60px] m-0 p-0;
}

.banner-numbervalulist li {
  @apply mr-[30px] md:mr-[60px];
}
.banner-numbervalulist li:last-child {
  @apply mr-0;
}

.banner-numbervalulist strong {
  @apply block text-primary text-3xl md:text-4xl font-extrabold;
}

.banner-numbervalulist span {
  @apply text-sm md:text-base tracking-[1px];
}
</style>