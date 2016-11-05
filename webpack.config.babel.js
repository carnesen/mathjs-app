import path from 'path'
import webpack from 'webpack'

const { NODE_ENV } = process.env

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
  })
]

if (NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin())
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
      filename: `bundle.js`
    },
    plugins,
    module: {
      loaders: [
        { test: /.js$/, loader: 'babel', exclude: /node_modules/ },
        { test: /\.json$/, loader: 'json' },
        { test: /\.css$/, loader: 'style!css?modules' },
        { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file' }
      ]
    }
  }
]
