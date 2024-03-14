const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Adiciona as folhas de estilo ao DOM injetando a tag <style>
          'style-loader',
          // Permite importar arquivos CSS/Sass
          'css-loader',
          // Compila Sass para CSS
          'sass-loader',
        ],
      },
    ],
  },
};