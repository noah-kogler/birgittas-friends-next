const { i18n } = require('./next-i18next.config')
const withImages = require('next-images')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withImages({
  assetPrefix: isProd ? 'https://birgittas-friends-next.vercel.app' : '',
  i18n,
})