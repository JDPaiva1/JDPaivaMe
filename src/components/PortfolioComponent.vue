<template>
  <div class="work">
    <h2 class="heading">Latest works</h2>
    <div class="work-list-section">
      <div class="work-list">
        <section>
          <h3 class="work-tilte">Tripy mobile app</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sem maximus, ornare metus ut, congue enim.
            Sed fermentum nulla tellus, quis efficitur mauris tristique efficitur. Aliquam rhoncus sem sed ullamcorper
            venenatis. Aenean malesuada eu orci non sodales. </p>
          <a href="works-setails.html" class="button">Details</a>
        </section>
        <figure>
          <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/jdpaiva1-me.appspot.com/o/portfolio%2F1.jpg?alt=media&token=28b20c87-2435-4507-acfe-16543cf0fa01">
        </figure>
      </div>
      <div class="work-list">
        <section>
          <h3 class="work-tilte">Hello mobile app</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sem maximus, ornare metus ut, congue enim.
            Sed fermentum nulla tellus, quis efficitur mauris tristique efficitur. Aliquam rhoncus sem sed ullamcorper
            venenatis. Aenean malesuada eu orci non sodales. </p>
          <a href="works-setails.html" class="button">Details</a>
        </section>
        <figure>
          <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/jdpaiva1-me.appspot.com/o/portfolio%2F1.jpg?alt=media&token=28b20c87-2435-4507-acfe-16543cf0fa01">
        </figure>
      </div>
      <div class="work-list">
        <section>
          <h3 class="work-tilte">Cute cookies app</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sem maximus, ornare metus ut, congue enim.
            Sed fermentum nulla tellus, quis efficitur mauris tristique efficitur. Aliquam rhoncus sem sed ullamcorper
            venenatis. Aenean malesuada eu orci non sodales. </p>
          <a href="works-setails.html" class="button">Details</a>
        </section>
        <figure>
          <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/jdpaiva1-me.appspot.com/o/portfolio%2F1.jpg?alt=media&token=28b20c87-2435-4507-acfe-16543cf0fa01">
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work {
  @apply pb-8;
}

.work-list {
  @apply bg-divider mb-10 p-7 md:py-10 md:px-16 flex flex-wrap lg:flex-nowrap;
}

.work-list section {
  @apply pt-5 pb-8 lg:py-5 lg:pr-11 w-full lg:w-3/5;
}

.work-list figure {
  @apply w-full lg:w-2/5 lg:pl-3;
}

.work-list figure img {
  @apply w-auto h-full mx-auto;
}

.work-tilte {
  @apply text-black text-3xl leading-9 font-semibold mb-8;
}

.work-list p {
  @apply font-light md:text-lg leading-8 mb-4;
}

.work-list .button {
  @apply mt-5;
}
</style>