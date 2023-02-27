/* webpack.common.js
 * required by webpack.config.js */
 
const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ESLintPlugin = require('eslint-webpack-plugin'),
      CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  
  entry:{
    index: './src/index.js'
    },

  devServer:{
    static: '../dist',
  },
  
  plugins: [
    
    new HtmlWebpackPlugin({
      title: 'WebMode',
      template: './src/index.html',
    }),
    
    new ESLintPlugin(),//Now, all source code that goes through Weback will be checked by ESLint automatically.
    
    new CopyPlugin({
     patterns: [
        {
        from: 'src/static',
        to: '../dist/static'
        }
      ]
    }),
  ],
  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'..','dist'),
    clean: true,
  },
  
  optimization: {
    runtimeChunk: 'single',
  },
  
  module: {
    
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
    
  },
};
