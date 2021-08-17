module.exports = api => {
  api.extendPackage({
    dependencies: {
      'register-service-worker': '^1.7.1'
    }
  })
  api.injectImports(api.entryFile, `
  // #ifdef H5
  import './registerServiceWorker'
  // #endif
  `)
  api.render('./template')

  if (api.invoking && api.hasPlugin('typescript')) {
    /* eslint-disable-next-line node/no-extraneous-require */
    const convertFiles = require('@vue/cli-plugin-typescript/generator/convert')
    convertFiles(api)
  }
}
