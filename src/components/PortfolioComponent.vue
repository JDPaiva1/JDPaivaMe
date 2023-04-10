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
        <figure><img src="https://firebasestorage.googleapis.com/v0/b/jdpaiva1-me.appspot.com/o/portfolio%2F1.jpg?alt=media&token=28b20c87-2435-4507-acfe-16543cf0fa01"></figure>
      </div>
      <div class="work-list">
        <section>
          <h3 class="work-tilte">Hello mobile app</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sem maximus, ornare metus ut, congue enim.
            Sed fermentum nulla tellus, quis efficitur mauris tristique efficitur. Aliquam rhoncus sem sed ullamcorper
            venenatis. Aenean malesuada eu orci non sodales. </p>
          <a href="works-setails.html" class="button">Details</a>
        </section>
        <figure><img src="https://firebasestorage.googleapis.com/v0/b/jdpaiva1-me.appspot.com/o/portfolio%2F1.jpg?alt=media&token=28b20c87-2435-4507-acfe-16543cf0fa01"></figure>
      </div>
      <div class="work-list">
        <section>
          <h3 class="work-tilte">Cute cookies app</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sem maximus, ornare metus ut, congue enim.
            Sed fermentum nulla tellus, quis efficitur mauris tristique efficitur. Aliquam rhoncus sem sed ullamcorper
            venenatis. Aenean malesuada eu orci non sodales. </p>
          <a href="works-setails.html" class="button">Details</a>
        </section>
        <figure><img src="https://firebasestorage.googleapis.com/v0/b/jdpaiva1-me.appspot.com/o/portfolio%2F1.jpg?alt=media&token=28b20c87-2435-4507-acfe-16543cf0fa01"></figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work {
  @apply pb-20;
}

.work-list {
  @apply bg-[#F6F8FA] mb-10 pt-10 px-[70px] flex;
}

.work-list section {
  @apply pr-[120px] pt-5 w-full mr-4 pl-4 md:w-3/5 lg:w-3/5 xl:w-3/5;
}

.work-list figure {
  @apply w-full pr-4 pl-4 md:w-2/5 lg:w-2/5 xl:w-2/5;
}

.work-tilte {
  @apply text-black text-3xl leading-9 font-semibold mb-[30px];
}

.work-list p {
  @apply font-light text-lg leading-[30px];
}

.work-list .button {
  @apply mt-5;
}

.work-det-hed {
  @apply pt-[42px] pb-20;
}

.work-det-title {
  @apply font-semibold text-black text-5xl mb-5;
}

.work-det-dep {
  @apply block font-semibold text-black text-lg;
}

.work-content-sec {
  @apply px-0 py-[100px];
}

.work-content-sec p {
  @apply text-lg leading-9 mb-[30px];
}

.work-content-sec h2 {
  @apply text-3xl font-bold mb-[30px];
}

.work-content-sec ul {
  @apply m-0 p-0;
  list-style:none;
}

.work-content-sec li {
  @apply text-lg leading-9 relative mb-5 pl-7 before:content-[""] before:absolute before:w-2 before:h-2 before:bg-[#373737] before:rounded-[100%] before:left-0 before:top-[13px];
}</style>