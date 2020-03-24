const path = require('path');

const REVIEW_INDEX = '/Users/alexmitchell/Desktop/reviews-service/client/index.jsx';
const RESERVATION_INDEX = '/Users/alexmitchell/Desktop/reservation-service/client/index.dev.jsx';
const PUBLIC_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: [REVIEW_INDEX, RESERVATION_INDEX],
  output: {
    path: PUBLIC_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64:8]',
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
};
