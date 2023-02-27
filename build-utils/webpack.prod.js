/* webpack.prod.js
*/
const { DefinePlugin } = require('webpack'),
      Dotenv = require('dotenv-webpack'),
      path = require('path'),
      MiniCssExtract = require('mini-css-extract-plugin'),
      Terser = require("terser-webpack-plugin");

module.exports = {
  
  mode: 'production',
  
  module: {
    
    rules: [
      {/*style loaders
        chained loaders run in reverse order*/
        test:/\.scss$/,
        use:[MiniCssExtract.loader,'css-loader', 'postcss-loader','sass-loader']
      }
    ]
  },
  optimization: {
    minimize: true,
    
    minimizer: [
      new Terser()
      /* For webpack@5 the `...` syntax extends existing minimizers(i.e. `terser-webpack-plugin`)
      ** uncomment the next line**/
      // `...`,
    ],
  },
  plugins: [
    new MiniCssExtract(),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.production'),
    })
  ],
  devtool: 'source-map',
};
