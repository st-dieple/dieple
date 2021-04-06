const Webpack = require('webpack');
const Path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outPath = Path.join(__dirname, './dist');
const sourcePath = Path.join(__dirname, './src');
const dotenv = require('dotenv');

module.exports = (env) => {
  const environment = env && env.NODE_ENV ? env.NODE_ENV : 'development';
  const envParsed = dotenv.config().parsed;
  const envKeys = Object.keys(envParsed).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(envParsed[next]);
    return prev;
  }, {});

  return {
    mode: environment,
    target: 'web',
    devtool: "source-map",
    context: sourcePath,
    output: {
      path: outPath,
      publicPath: '/',
      filename: '[name].js',
    },
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    entry: {
      main: './app/index.tsx',
      vendor: [
        'react',
        'react-dom',
        'react-redux',
        'redux'
      ],
      // scripts: scriptIncludes,
      styles: [
        './stylesheet/styles.scss'
      ]
    },
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js"],
      mainFields: ['browser', 'main'],
      alias: {
        '@app': Path.resolve(__dirname, './src/app/')
      }
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader"
            }
          ]
        },
        { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
        { test: /\.html$/, use: 'html-loader' },
        { test: /\.png$/, use: 'url-loader?limit=10000' },
        { test: /\.jpg$/, use: 'file-loader' },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
        },
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
        {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff'},
        {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff'},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/octet-stream'},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'}
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'assets',
          to: 'assets'
        }
      ]),
      new Webpack.DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
        inject: true,
        template: './index.html'
      })
    ],
    devServer: {
      contentBase: sourcePath,
      hot: true,
      host: "localhost",
      port: 3000,
      compress: true,
      // watchOptions: {
      //   poll: true
      // },
      watchContentBase: true,
      stats: {
        warnings: false
      },
    }
  }
};
