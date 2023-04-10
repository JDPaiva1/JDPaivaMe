<template>
  <div class="about">
    <section>
      <h2 class="heading">About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum ante a porta blandit. Quisque velit
        tortor, ultricies in quam ut, luctus convallis metus. Nunc vitae felis rutrum, mattis justo quis, bibendum
        tellus. Integer bibendum eget dolor nec venenatis. Aliquam erat volutpat. Etiam et est vitae turpis accumsan
        vulputate. Curabitur et vehicula nisl, eu congue dolor. Vivamus nec hendrerit mi Nulla consequat tempor.
      </p>
      <div class="about-button-sec text-center">
        <a href="#" class="button">Download Resume</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  @apply pt-[60px] pb-[60px] md:pb-[120px];
}

.about p {
  @apply text-grey text-[15px] md:text-2xl leading-[30px] md:leading-10 font-light mb-[30px] md:mb-[60px];
}

.about-arrow-button i {
  @apply inline-block align-middle;
}
</style>