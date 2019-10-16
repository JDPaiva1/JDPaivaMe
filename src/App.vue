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
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/database';

import Loader from './components/Loader.vue';
import Navigation from './components/Navigation.vue';
import Masthead from './components/Masthead.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';
import FooterNav from './components/FooterNav.vue';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
};

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
      firebase.database().ref(this.reference).once('value', (snapshot) => {
        this.data = snapshot.val();
      });
    },
  },
  created() {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    this.readDatabase();
  },
};
</script>

<style lang="scss">
#app {
  position: relative !important;
}
</style>
