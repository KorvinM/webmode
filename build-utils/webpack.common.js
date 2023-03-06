/* webpack.common.js
 * required by webpack.config.js */
 
const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ESLintPlugin = require('eslint-webpack-plugin'),
      CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  
  entry:{
    index: './src/index.js',
    test: './src/test.js'	  
    },

  devServer:{
    static: '../dist',
  },
  
  plugins: [
    
    new HtmlWebpackPlugin({
      meta: {
        'charset':'utf-8',
        'Compat':{'http-equiv':'X-UA-Compatible','content': 'IE=edge'},
	'opengraphimg':{'property':'og:image','content': ''},
	'opengraphurl':{'property':'og:url','content': ''},
        'decription':'webapp',
        'decription':'webapp',
        'keywords':'webapp',
        'viewport':'width=device-width, initial-scale=1',
      },
      title: 'WebMode',
      template: './src/index.html',
      inject: 'head',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      meta: {
        'charset':'utf-8',
        'Compat':{'http-equiv':'X-UA-Compatible','content': 'IE=edge'},
	'opengraphimg':{'property':'og:image','content': ''},
	'opengraphurl':{'property':'og:url','content': ''},
        'decription':'webapp test page',
        'keywords':'webapp test',
        'viewport':'width=device-width, initial-scale=1',
      },
      title: 'WebMode Test Page',
      filename: 'test.html',
      template: './src/test.html',
      inject: 'head',
      chunks: ['test'],
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
    //runtimeChunk: 'single',
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
      {
	// https://webpack.js.org/guides/asset-modules/#replacing-inline-loader-syntax
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        // https://webpack.js.org/loaders/html-loader/#usage
        resourceQuery: /template/,
        loader: 'html-loader'
      }
    ],
    
  },
};
