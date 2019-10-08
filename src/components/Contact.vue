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
          <font-awesome-icon
            ref="srContact"
            :icon="['fas', 'envelope']"
            class="mb-3 sr-contact"
            :class="{'active': isActive}"/>
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
    callback(entries) {
      if (entries[0].isIntersecting) {
        this.isActive = true;
      }
    },
  },
  mounted() {
    this.observer = new IntersectionObserver(this.callback, this.options);
    this.observer.observe(this.$refs.srContact);
  },
};
</script>

<style lang="scss">
section#contact {
  div.col-lg-4.mx-auto.text-center {
    .sr-contact {
      opacity: .1;
      font-size: .1em;
      transition: opacity 2s .4s, font-size 4s .4s;
      &.active {
        opacity: 1;
        font-size: 3em;
      }
    }
    a {
      color: $primary;
    }
  }
}
</style>
