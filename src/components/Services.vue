<template>
  <section id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">{{ services.title }}</h2>
          <hr class="my-4">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row" ref="srIcon">
        <div
          class="col-lg-3 col-md-6 text-center"
          v-for="(service, index) in services.service"
          :key="index">
          <div class="service-box mt-5 mx-auto">
            <font-awesome-icon
              :icon="[service.icon.type, service.icon.name]"
              class="text-primary mb-3 sr-icon"
              :class="[{'active': isActive}, addClass(index)]"/>
            <h3 class="mb-3">{{ service.title }}</h3>
            <!-- <p class="text-muted mb-0"></p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  props: {
    services: Object,
  },
  data() {
    return {
      observer: null,
      options: {
        threshold: 1,
      },
      isActive: false,
    };
  },
  methods: {
    addClass(index) {
      return `sr-icon-${index + 1}`;
    },
    callback(entries) {
      if (entries[0].isIntersecting) {
        this.isActive = true;
      }
    },
  },
  mounted() {
    this.observer = new IntersectionObserver(this.callback, this.options);
    this.observer.observe(this.$refs.srIcon);
  },
};
</script>

<style lang="scss">
section#services {
  .service-box {
    max-width: 400px;
    .sr-icon {
      opacity: .1;
      font-size: .1em;
      transition: opacity 1s, font-size 1s;
      &.active {
        opacity: 1;
        font-size: 4em;
      }
      &-1 {
        transition-delay: .2s;
      }
      &-2 {
        transition-delay: .4s;
      }
      &-3 {
        transition-delay: .6s;
      }
      &-4 {
        transition-delay: .8s;
      }
    }
  }
}
</style>
