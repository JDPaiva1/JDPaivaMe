<template>
  <div id="app">
    <Loader v-if="data === ''"/>
    <template v-else-if="data != ''">
      <Navigation :navbar="data.main.navbar" :path="path"/>
      <Masthead :main="data.main"/>
      <section
        class="p-0"
        v-scroll-spy="{offset: 55, allowNoActive: true, time: 1000, steps: 30}">
        <About :about="data.about"/>
        <Services :services="data.services"/>
        <Portfolio :portfolio="data.portfolio"/>
        <Contact :contact="data.contact"/>
      </section>
      <FooterNav/>
    </template>
  </div>
</template>

<script>
import Loader from './components/Loader.vue';
import Navigation from './components/Navigation.vue';
import Masthead from './components/Masthead.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';
import FooterNav from './components/FooterNav.vue';

import { db } from '../config/firebase';

export default {
  name: 'app',
  components: {
    Loader,
    Navigation,
    Masthead,
    About,
    Services,
    Portfolio,
    Contact,
    FooterNav,
  },
  data() {
    return {
      data: '',
      path: window.location.pathname,
      reference: 'es/',
    };
  },
  methods: {
    readDatabase() {
      this.reference = this.path === '/' ? 'es/' : 'en/';
      db.ref(this.reference).once('value', (snapshot) => {
        this.data = snapshot.val();
      });
    },
  },
  created() {
    this.readDatabase();
  },
};
</script>

<style lang="scss">
#app {
  position: relative !important;
}
</style>
