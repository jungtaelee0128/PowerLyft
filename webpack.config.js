const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename : 'bundle.js',
    },
    mode: process.env.NODE_ENV,
    devServer: {
        static: {
            publicPath: '/build',
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 8080,
    },
    module: {
        rules: [
            {
              test: /jsx?$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                  ],
                },
              },
            },
            {
              test: /scss$/,
              exclude: /node_modules/,
              use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(png|jpe?g|gif|svg)$/i,
              use: [
                  {
                      loader: 'file-loader', // or 'url-loader'
                      options: {
                          name: '[name].[ext]',
                          outputPath: 'assets/', // This is where the images will be copied to in your build output
                      },
                  },
              ],
          },
          ],
    },
    plugins: [
        //title makes a new file with the name of the value, template uses the value file as a template
        new HtmlWebpackPlugin({ title: 'development', template: './client/index.html' }),
      ],
}