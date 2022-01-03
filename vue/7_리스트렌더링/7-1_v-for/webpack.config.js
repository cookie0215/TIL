const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

//export
module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],
    
    // 경로 별칭
    alias: {
      '~' : path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets')
    }
  },

  // 파일을 읽어 들이기 시작하는 진입점을 설정 : 웹팩을 실행했을 때 js 폴더 밑의 main.js 을 대상으로 웹팩이 빌드를 수행하는 코드
  entry: './src/main.js',

  // 결과물(번들)을 반환하는 파일 경로를 설정
  output: {
    // filename: 'main.js',
    // path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    // 생성자 함수 반환
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },

      // babel 패키지 설치 후, 추가 작성한 부분
      {
        test: /\.js$/,
        exclude: /node_modules/,      // 제외 경로
        use: [
          'babel-loader'
        ]
      },

      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    host: 'localhost'
  }
}