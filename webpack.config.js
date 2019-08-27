var HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
   entry: './app/index.js',
   output: {
      path: path.join(__dirname, './bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   plugins:[
      new HTMLWebpackPlugin({
         template: './app/index.html'
      })
   ]
}




