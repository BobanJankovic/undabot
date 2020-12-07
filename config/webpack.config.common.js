'use strict'

const VueLoaderPlugin      = require('vue-loader/lib/plugin')
const HtmlPlugin           = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const VuetifyLoaderPlugin  = require('vuetify-loader/lib/plugin')
const helpers              = require('./helpers')
const isDev                = process.env.NODE_ENV === 'localdev'
const Dotenv               = require('dotenv-webpack')

const webpackConfig = {
  entry: {
    main: helpers.root('src', 'main')
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: isDev ? 'vue/dist/vue.js' : 'vue/dist/vue.min.js',
      '@': helpers.root('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [helpers.root('src')]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules\/(?!(vuetify)\/)/
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: isDev } }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: isDev } },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              prependData: '@import "@/assets/stylesheets/global.scss";',
              sassOptions: {
                fiber: false
              },
              sourceMap: isDev
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: isDev } },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: false
              },
              sourceMap: isDev
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          { loader: 'file-loader' }
        ]

      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({ template: 'index.html', chunksSortMode: 'dependency' }),
    new VuetifyLoaderPlugin(),
    new Dotenv()
  ]
}

module.exports = webpackConfig
