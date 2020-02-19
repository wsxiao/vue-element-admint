'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

const env = process.env.NODE_ENV

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  API_ROOT: env === 'development' ? '"http://bdi-cms.hvyogo.com"' : '"/api"' // dev环境配制了服务代理，API_ROOT的api是配制的代理地址
})
