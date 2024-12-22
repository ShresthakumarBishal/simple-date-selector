const path = require('path');

module.exports = {
  entry: './src/index.ts', // Entry point for TypeScript
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'date-selector.js',
    library: 'DateSelector',
    libraryTarget: 'umd', // Universal Module Definition for broad compatibility
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Use ts-loader for TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'production',
};
