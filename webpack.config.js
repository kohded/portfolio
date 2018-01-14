const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isProduction = process.env.npm_lifecycle_event === 'prod';

module.exports = {
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    overlay: {
      warnings: true,
      errors: true,
    },
    port: 8000,
    stats: 'minimal',
  },
  entry: {
    app: path.join(__dirname, 'src/js/index.js'),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.(gif|jpg|png|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img/',
            },
          },
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                localIdentName: '[name]-[local]-[hash:base64:5]',
                modules: true,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  'src/scss/utils/_variables.scss',
                  'src/scss/utils/_functions.scss',
                  'src/scss/utils/_mixins.scss',
                ],
              },
            },
          ],
        }),
      },
    ],
  },
  output: {
    filename: isProduction ? 'assets/js/app.min.js' : 'assets/js/app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ExtractTextPlugin({
      allChunks: true,
      disable: false,
      filename: isProduction ? 'assets/css/app.min.css' : 'assets/css/app.css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: isProduction,
      minify: {
        collapseWhitespace: isProduction,
      },
      template: 'src/public/index.html',
      title: 'Arnold Koh | Software Developer',
    }),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/js/components'),
      pages: path.resolve(__dirname, 'src/js/pages'),
      images: path.resolve(__dirname, 'src/public/assets/images'),
      scss: path.resolve(__dirname, 'src/scss'),
    },
  },
};
