const pathPrefix = process.env.NODE_ENV === 'production'
  ? '/my-project'
  : '';

module.exports = {
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
};