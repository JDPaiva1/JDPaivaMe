<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="loader-box col-12">
        <div class="loader is-loader" id="loader"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>

<style lang="scss">
.loader-box {
  display: flex;
  height: 100vh;
  margin: 0;
  align-items: center;
  justify-content: center;
  .loader {
    width: 100px;
    height: 100px;
    background-image: url('../assets/loader.jpg');
    background-size: 100px 100px;
    &.is-loader {
      animation-name: loader;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  }
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
