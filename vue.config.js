module.exports = {
  publicPath: '/',
  css: {
    modules: true,
    loaderOptions: {
      scss: {
        // eslint-disable-next-line
        data: `@import "~@/scss/global.scss";`,
      },
    },
  },
};
