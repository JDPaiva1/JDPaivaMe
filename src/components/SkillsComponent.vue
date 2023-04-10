<template>
  <div class="skills">
    <div class="skills-container">
      <h2 class="heading">Core Skills</h2>
      <ul class="skills-list">
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Vue.js</li>
        <li>React</li>
        <li>Sequelize</li>
        <li>Github</li>
        <li>HTML</li>
      </ul>
    </div>
    <div class="skills-container">
      <h2 class="heading">Other Skills</h2>
      <ul class="skills-list">
        <li>Storyblok</li>
        <li>PWAs</li>
        <li>Responsive Web Design</li>
        <li>React</li>
        <li>Vuetify</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.skills {
  @apply pb-[105px] flex flex-wrap;
}

.skills-container {
  @apply mb-10 md:mb-0 w-full pr-4 pl-4 md:w-1/2 lg:w-1/2 xl:w-1/2;
}

.skills-list {
  @apply flex flex-wrap items-center mt-[11px] m-0 p-0;
}

.skills-list li {
  @apply inline-block text-grey text-base bg-white border font-medium mr-[15px] mb-[15px] px-5 py-2.5 rounded-[27px] border-solid border-[#D7D7D7];
}
</style>