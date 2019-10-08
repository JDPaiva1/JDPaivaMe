<template>
  <header class="masthead text-center text-white d-flex" :style="backgroundImg">
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <h1 class="text-uppercase">
            <strong>{{ main.name }}</strong>
          </h1>
          <div class="col-lg-8 mx-auto">
            <h2 class="text-faded mb-5">{{ main.headline }}</h2>
          </div>
          <hr>
        </div>
        <div class="col-lg-8 mx-auto">
          <p class="text-faded mb-5">{{ main.text }}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Masthead',
  props: {
    main: Object,
  },
  computed: {
    backgroundImg() {
      const browserDetection = browser => navigator.userAgent.search(browser);
      const detectionSafari = browserDetection('Safari') >= 0 && browserDetection('Chrome') < 0;
      let background = '';
      if (detectionSafari || browserDetection('MSIE') >= 0) {
        background = this.main.altBackground;
      } else {
        background = this.main.background;
      }
      return `background-image: url(${background})`;
    },
  },
};
</script>

<style lang="scss">
header.masthead {
  padding-top: 10rem;
  padding-bottom: calc(10rem - 56px);
  background-position: center center;
  @include background-cover;
  hr {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  h1 {
    font-size: 2rem;
  }
  p {
    font-weight: 300;
  }
  @media (min-width: 768px) {
    p {
      font-size: 1.15rem;
    }
  }
  @media (min-width: 992px) {
    height: 100vh;
    min-height: 650px;
    padding-top: 0;
    padding-bottom: 0;
    h1 {
      font-size: 3rem;
    }
  }
  @media (min-width: 1200px) {
    h1 {
      font-size: 4rem;
    }
  }
}
</style>
