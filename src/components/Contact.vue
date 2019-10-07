<template>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="section-heading">{{ contact.title }}</h2>
          <hr class="my-4">
          <p class="mb-5">{{ contact.text }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 mx-auto text-center">
          <font-awesome-icon :icon="['fas', 'envelope']" class="fa-3x mb-3 sr-contact-2"/>
          <p>
            <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    contact: Object,
  },
};
</script>

<style lang="scss">
div.col-lg-4.mx-auto.text-center a {
  color: $primary;
}
</style>
