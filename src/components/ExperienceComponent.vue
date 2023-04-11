<template>
  <div class="experience">
    <h2 class="heading">Work Experience</h2>
    <div class="experience-list-wrapper">
      <section class="experience-list">
        <span class="experience-year">2019 - Present</span>
        <h3 class="experience-officename">Matrix Media Inc</h3>
        <span class="experience-department">Full Stack developer</span>
        <p class="experience-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sem maximus, ornare metus ut, congue enim.
          Sed fermentum.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sem maximus, ornare metus ut.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </section>
      <section class="experience-list">
        <span class="experience-year">2018 - 2019</span>
        <h3 class="experience-officename">Lexind</h3>
        <span class="experience-department">Senior app developer</span>
        <p class="experience-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sem maximus, ornare metus ut, congue enim. Sed fermentum.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sem maximus, ornare metus ut.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sem maximus, ornare metus ut.</li>
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