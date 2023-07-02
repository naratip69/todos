const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module:{
    rule:[
        {
            test: /\.css$/i,
            use: ['style-loader','css-loader'],
        },
    ],
  },
};
