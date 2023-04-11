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