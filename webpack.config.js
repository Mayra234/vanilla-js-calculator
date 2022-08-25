const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (_, args) => {
  const env = args.mode === 'development' ? '.env.dev' : '.env.prod';
  const mode = args.mode || 'production';
  return {
    entry: './src/index.jsx',
    mode,
    devtool: 'source-map',
    resolve: { extensions: ['.js', '.jsx'] },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        },
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          type: 'asset',
        },
        {
          test: /\.html$/,
          use: ['html-loader'],
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    devServer: {
      open: true,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new Dotenv({ path: env }),
    ],
  };
};
