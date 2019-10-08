<template>
  <section class="p-0" id="portfolio">
    <div class="container-fluid p-0">
      <div class="row no-gutters popup-gallery">

        <div
          v-for="(project, index) in portfolio.projects"
          :key="index"
          class="col-lg-4 col-sm-6">
          <a
            class="portfolio-box"
            target="_blank"
            rel="noopener"
            :href="project.url">
            <img
              class="lazyload img-fluid"
              :data-src="project.image"
              :alt="project.alt">
            <div class="portfolio-box-caption">
              <div class="portfolio-box-caption-content">
                <div class="project-category text-faded">
                  {{ project.category }}
                </div>
                <div class="project-name">
                  {{ project.name }}
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Portfolio',
  props: {
    portfolio: Object,
  },
};
</script>

<style lang="scss">
.portfolio-box {
  position: relative;
  display: block;
  max-width: 650px;
  margin: 0 auto;
  border: 1px solid $white;
  .portfolio-box-caption {
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    opacity: 0;
    color: $white;
    background: fade-out($primary, .1);
    @include transition-all;
    .portfolio-box-caption-content {
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      text-align: center;
      .project-category,
      .project-name {
        padding: 0 15px;
        @include sans-serif-font;
      }
      .project-category {
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
      }
      .project-name {
        font-size: 18px;
      }
    }
  }
  &:hover {
    .portfolio-box-caption {
      opacity: 1;
    }
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    .portfolio-box-caption {
      .portfolio-box-caption-content {
        .project-category {
          font-size: 16px;
        }
        .project-name {
          font-size: 22px;
        }
      }
    }
  }
}
</style>
