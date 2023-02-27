/* webpack.config.js
 * returns a config for webpack, merging:
 * webpack.common.js config
 * optional addons */
 
const { merge } = require('webpack-merge'),
      commonConfig = require('./webpack.common.js');

module.exports = ({ env }) => {
  const envConfig = require(`./webpack.${env}.js`);
  return merge(commonConfig, envConfig);
};

