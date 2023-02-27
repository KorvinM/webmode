/*webpack.dev.js
 * */
const { DefinePlugin } = require('webpack'),
      Dotenv = require('dotenv-webpack'),
      path = require('path');

module.exports = {
  
  mode: 'development',
  
  module: {
    
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader','postcss-loader', 'sass-loader'],
      },
    ],
  },
  
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    })
  ],
  
  devtool: 'inline-source-map',
  
};
