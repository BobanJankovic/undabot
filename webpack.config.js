'use strict'

const environment = process.env.NODE_ENV.trim();

if (environment === 'localdev') {
  module.exports = require('./config/webpack.config.localdev.js')
} else {
  module.exports = require('./config/webpack.config.prod.js')
}
