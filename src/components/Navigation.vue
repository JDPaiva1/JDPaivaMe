<template>
  <nav
    class="navbar navbar-expand-lg navbar-light fixed-top"
    :class="{'navbar-shrink': isActive}" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="#app">
        JDPaiva1
      </a>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button" data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul
          class="navbar-nav ml-auto"
          v-scroll-spy-active="{selector: 'a.nav-link'}"
          v-scroll-spy-link>
          <li
            v-for="(item, index) in navbar.items"
            :key="index"
            class="nav-item">
            <a class="nav-link" :href="item.ref">{{item.title}}</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link d-inline-block pr-1"
              :class="[path === '/' ? languageActive : '']"
              :href="origin">
              ES
            </a>
            <strong class="nav-link d-inline-block p-0">/</strong>
            <a
              class="nav-link d-inline-block pl-1"
              :class="[path != '/' ? languageActive : '']"
              :href="`${origin}/en/`">
              EN
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    navbar: Object,
    path: String,
  },
  data() {
    return {
      isActive: false,
      widthLogo: 100,
      languageActive: 'language-active',
      origin: window.location.origin,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 100) {
        this.isActive = true;
        this.widthLogo = 31;
      } else {
        this.isActive = false;
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss">
#mainNav {
  border-bottom: 1px solid fade-out($gray-900, .9);
  background-color: $white;
  @include sans-serif-font;
  @include transition-all;
  .navbar-brand {
    font-weight: 700;
    text-transform: uppercase;
    color: $primary;
    @include sans-serif-font;
    &:focus, &:hover {
      color: darken($primary, .1);
    }
  }
  .navbar-nav {
    > li.nav-item {
       > a.nav-link, > a.nav-link:focus {
        font-size: .9rem;
        font-weight: 700;
        text-transform: uppercase;
        color: $gray-900;
        &:hover {
          color: $primary;
        }
        &.active, &.language-active {
          color: $primary !important;
          background-color: transparent;
          &:hover {
            background-color: transparent;
          }
        }
      }
    }
  }
  @media (min-width: 992px) {
    border-color: transparent;
    background-color: transparent;
    .navbar-brand {
      color: fade-out($white, .3);
      &:focus, &:hover {
        color: $white;
      }
    }
    .navbar-nav > li.nav-item > a.nav-link {
      padding: 0.5rem 1rem;
    }
    .navbar-nav > li.nav-item > a.nav-link,
    .navbar-nav > li.nav-item > a.nav-link:focus {
      color: fade-out($white, .3);
      &:hover {
        color: $white;
      }
    }
    &.navbar-shrink {
      border-bottom: 1px solid fade-out($gray-900, .9);
      background-color: $white;
      .navbar-brand {
        color: $primary;
        &:focus, &:hover {
          color: darken($primary, .1);
        }
      }
      .navbar-nav > li.nav-item > a.nav-link,
      .navbar-nav > li.nav-item > a.nav-link:focus {
        color: $gray-900;
        &:hover {
          color: $primary;
        }
      }
    }
  }
}
</style>
