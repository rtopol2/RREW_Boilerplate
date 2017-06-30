const path = require('path');

module.exports = {
  context: `${__dirname}/client/src`,

  entry: './index.jsx',

  output: {
    path: `${__dirname}/client/public/eventsAdmin`,
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    modules: [
      `${__dirname}/node_modules`,
    ],
    extensions: ['.js', '.jsx'],
  },
};
