// const path = require('path');

// function addStyleResource(rule) {
//   rule.use('sass-loader')
//     .loader('style-resources-loader')
//     .options({
//       patterns: [
//         path.resolve(__dirname, './src/scss/global.scss'),
//       ],
//     });
// }

module.exports = {
  css: {
    modules: true,
    loaderOptions: {
      scss: {
        // eslint-disable-next-line
        data: `@import "~@/scss/global.scss";`,
      },
    },
  },
  // chainWebpack: (config) => {
  //   const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
  //   types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)));
  // },
};
