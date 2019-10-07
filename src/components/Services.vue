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
      <div class="row">
        <div
          class="col-lg-3 col-md-6 text-center"
          v-for="(service, index) in services.service"
          :key="index">
          <div class="service-box mt-5 mx-auto">
            <font-awesome-icon
              :icon="[service.icon.type, service.icon.name]"
              class="fa-4x text-primary mb-3 sr-icon-2"/>
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
};
</script>

<style lang="scss">
section#services {
  .service-box {
    max-width: 400px;
  }
}
</style>
