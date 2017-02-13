var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./docs/data')
var PrettierPlugin = require('../src')

module.exports = {

  entry: './docs/entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx$)/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css/, exclude: /colors\.css/, loader: 'css-loader!cssnext-loader' }
    ]
  },

  plugins: [
    new PrettierPlugin({
      // Fit code within this line limit
      printWidth: 80,

      // Number of spaces it should use per tab
      tabWidth: 2,

      // If true, will use single instead of double quotes
      singleQuote: false,

      // Controls the printing of trailing commas wherever possible
      trailingComma: false,

      // Controls the printing of spaces inside object literals
      bracketSpacing: true,

      // If true, puts the `>` of a multi-line jsx element at the end of
      // the last line instead of being alone on the next line
      jsxBracketSameLine: false,

      // Which parser to use. Valid options are 'flow' and 'babylon'
      parser: 'babylon'
    }),
    new StaticSiteGeneratorPlugin('bundle.js', ['/'], data)
  ],

  cssnext: {
    compress: true,
    features: {
      rem: false,
      pseudoElements: false,
      colorRgba: false
    }
  }

}
