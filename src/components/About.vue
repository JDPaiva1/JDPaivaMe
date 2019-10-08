<template>
  <section class="bg-primary" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="section-heading text-white">{{ about.title }}</h2>
          <hr class="light my-4">
          <div class="row">
            <div class="col-lg-6">
              <p class="text-faded mb-4 mt-4">
                Soy Jose Daniel Paiva un joven programador venezolano amante de la tecnología,
                con ganas de aprender algo nuevo todos los días,
                estudiante de Platzi
                <a href="https://platzi.com/@jdpaiva1/" target="_blank" rel="noopener">
                  <strong>(ver mi perfil aquí).</strong>
                </a>
              </p>
              <p class="text-faded mb-4">
                Tengo un año de experiencia en el desarrollo de aplicaciones webs.
                Desarrollo principalmente en JavaScript,
                también manejo PHP y trabajo con tecnologías como Vue.js,
                React.js, Node.js, Firebase y WordPress.
              </p>
              <p class="text-faded mb-4">
                En mi tiempo libre suelo tomar fotos y subirlas a
                <a href="https://www.instagram.com/jdpaiva1/" target="_blank" rel="noopener">
                  <strong> mi Instagram.</strong>
                </a>
              </p>
            </div>
            <div class="col-lg-6">
              <div v-for="(skill, index) in about.skills" :key="index" class="mb-4">
                <div class="progress-title text-faded">{{skill.skill}}</div>
                <div class="progress">
                  <div
                    role="progressbar"
                    :style="`width: ${skill.progress}%`"
                    :aria-valuenow="skill.progress"
                    aria-valuemin="0" aria-valuemax="100"
                    class="progress-bar"></div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 mx-auto mt-5">
              <a
                class="btn btn-light btn-xl mb-5"
                href="https://www.linkedin.com/in/jdpaiva1/"
                target="_blank"
                rel="noopener">
                {{ about.button }}
              </a>
              <img
                :data-src="about.image" :alt="about.alt"
                class="lazyload image rounded-circle img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  props: {
    about: Object,
  },
};
</script>

<style lang="scss">
section#about {
  p.text-faded {
    > a {
    color: rgba(255,255,255,.7);
    }
  }
  .progress-title {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .progress {
    height: 30px;
    border-radius: 0;
    > .progress-bar {
      background: $secondary;
    }
  }
  a.btn.btn-light.btn-xl {
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    border-radius: 300px;
    padding: 1rem 2rem;
    color: $black;
    background-color: $white;
  }
}
</style>
