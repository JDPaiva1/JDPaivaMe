<template>
  <footer class="main-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-center text-lg-left">
          <p class="social">
            <a href="https://www.linkedin.com/in/jdpaiva1/">
              <font-awesome-icon :icon="['fab', 'linkedin-in']"/>
            </a>
            <a href="https://github.com/JDPaiva1">
              <font-awesome-icon :icon="['fab', 'github']"/>
            </a>
            <a href="https://twitter.com/JDPaiva1">
              <font-awesome-icon :icon="['fab', 'twitter']"/>
            </a>
            <a href="https://www.instagram.com/jdpaiva1/">
              <font-awesome-icon :icon="['fab', 'instagram']"/>
            </a>
            <a href="https://500px.com/jdpaiva1">
              <font-awesome-icon :icon="['fab', '500px']"/>
            </a>
          </p>
        </div>
        <div class="col-md-6 text-center text-lg-right mt-4 mt-lg-0 text-faded">
          <p>© 2019 JDPaiva1.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterNav',
};
</script>

<style lang="scss">
footer.main-footer {
  padding: 60px 0;
  background: $primary;
  p.social a {
    margin-left: .6em;
    color: $primary;
    display: inline-block;
    width: 45px;
    height: 45px;
    border-radius: 25px;
    line-height: 45px;
    font-size: 1.3rem;
    vertical-align: middle;
    text-align: center;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    background-color: $white;
  }
  p {
    margin: 0;
    color: $white;
    font-family: "Roboto Slab", serif;
    font-size: 0.9rem;
  }
}
</style>
