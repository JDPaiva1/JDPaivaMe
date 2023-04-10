<template>
  <div class="experience">
    <h2 class="heading">Work Experience</h2>
    <div class="experience-list">
      <section>
        <span class="experience-year">2019 - Present</span>
        <h3 class="experience-officename">Matrix Media Inc</h3>
        <span class="experience-department">Full Stack developer</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sem maximus, ornare metus ut, congue enim.
          Sed fermentum.</p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sem maximus, ornare metus ut.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </section>
      <section>
        <span class="experience-year">2018 - 2019</span>
        <h3 class="experience-officename">Lexind</h3>
        <span class="experience-department">Senior app developer</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sem maximus, ornare metus ut, congue enim.
          Sed fermentum.</p>
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
  @apply md:pb-[120px];
}

.experience-list section {
  @apply pr-[70px] w-full mr-4 pl-4;
}

.experience-list {
  @apply pt-[15px] flex;
}

.experience-officename {
  @apply text-2xl font-light mb-2.5;
}

.experience-list span {
  @apply block;
}

span.experience-year {
  @apply text-[#373737] text-sm font-bold pb-2.5;
}

span.experience-department {
  @apply text-[#373737] font-medium text-lg pb-[30px];
}

.experience-list p {
  @apply text-base leading-6 font-light;
}

.experience-list ul {
  @apply m-0 pt-2.5 p-0;
  list-style: none;
}

.experience-list ul li {
  @apply text-base leading-6 font-light relative mb-5 pl-7 before:content-[""] before:absolute before:w-2 before:h-2 before:bg-[#373737] before:rounded-[100%] before:left-0 before:top-2.5;
}
</style>