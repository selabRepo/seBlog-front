
// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const path = require('path')
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    webpack: (config, { dev }) => {
      // Perform customizations to config
      // Important: return the modified config
      return config
    },
    cssLoaderOptions: {
      url: false
    }
})