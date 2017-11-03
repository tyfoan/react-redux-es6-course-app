export default {
  debug: true,
  devtool: 'cheap-module-source-map',
  noInfo: false,
  entry: [
    './src/index'
  ],
  target: 'web',
  devServer: {
    contentBase: './src'
  }
}
