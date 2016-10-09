import path from 'path'
import webpack from 'webpack'

const { NODE_ENV } = process.env
const production = NODE_ENV === 'production'

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
  })
]

let extension = '.js'
if (production) {
  plugins.push(new webpack.optimize.UglifyJsPlugin())
  extension = '.min.js'
}

module.exports = [
  {
    entry: [
      'babel-polyfill',
      'whatwg-fetch',
      path.join(__dirname, 'src', 'browser', 'index.js')
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: `bundle${extension}`
    },
    plugins,
    module: {
      loaders: [
        {
          test: /.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        { test: /\.json$/, loader: 'json-loader' }
      ]
    }
  }
]
