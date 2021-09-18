const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = function (_, env) {
  const webpackEnv = env.mode === 'development' ? 'development' : 'production';
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';
  console.log('webpackEnv: ', webpackEnv);

  return {
    mode: webpackEnv,
    bail: isEnvProduction,
    devtool: isEnvDevelopment ? 'cheap-module-source-map' : false,
    entry: path.resolve(__dirname, 'src'),
    resolve: {
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      publicPath: '/',
      clean: true,
      filename: isEnvDevelopment
        ? 'static/js/[name].js'
        : 'static/js/[name].[contenthash:8].js',
      chunkFilename: isEnvDevelopment
        ? 'static/js/[name].chunk.js'
        : 'static/js/[name].[contenthash:8].chunk.js',
      chunkLoadingGlobal: `webpackJsonp-photo-app-chunks`,
    },
    optimization: {
      minimize: isEnvProduction,
      minimizer: [`...`, new CssMinimizerPlugin()],
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: {
        name: (entrypoint) => `runtime-${entrypoint.name}`,
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: isEnvDevelopment
              ? {
                  getCustomTransformers: () => ({
                    before: [require('react-refresh-typescript')()],
                  }),
                }
              : {},
          },
        },
        {
          test: /\.css$/,
          include: /\.module\.css$/,
          use: getStyleLoaders({
            importLoaders: 1,
            modules: {
              mode: 'local',
              getLocalIdent: getCSSModuleLocalIdent,
            },
          }),
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: getStyleLoaders({
            importLoaders: 1,
            modules: {
              mode: 'icss',
            },
          }),
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
      static: path.resolve(__dirname, 'public'),
      open: true,
      hot: true,
      port: 4000,
      client: {
        logging: 'warn',
        progress: false,
      },
    },
    plugins: getPlugins(),
    performance: false,
  };

  function getStyleLoaders(cssOptions) {
    const loaders = isEnvDevelopment
      ? [{ loader: 'style-loader' }]
      : [{ loader: MiniCssExtractPlugin.loader }];

    return loaders.concat([
      {
        loader: 'css-loader',
        options: cssOptions,
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [['postcss-preset-env', 'postcss-flexbugs-fixes']],
          },
        },
      },
    ]);
  }

  function getPlugins() {
    const plugins = isEnvProduction
      ? [
          new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
          }),
          new CopyPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, 'public'),
                to: path.resolve(__dirname, 'dist'),
                globOptions: {
                  dot: true,
                  gitignore: true,
                  ignore: ['**/index.html'],
                },
              },
            ],
          }),
        ]
      : [
          new ReactRefreshWebpackPlugin({
            overlay: false,
          }),
          new webpack.HotModuleReplacementPlugin(),
        ];

    return plugins.concat([
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'),
      }),
    ]);
  }
};
