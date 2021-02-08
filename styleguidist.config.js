const path = require('path')

const packagePath = path.resolve(
    __dirname,
    // '../package.json'
    './package.json'
)
const packageFile = require(packagePath)

module.exports = {
    title: "Project title", // 文档名
    // components: './src/example/**/*.jsx', // 写入对应目录的文档
    components: ['./src/components/**/*.jsx', './src/scenes/**/*.jsx'], // 写入对应目录的文档
    ignore: ['./src/scenes/**/*.test.jsx', './src/components/**/*.test.jsx'],
    version: packageFile.version, // 同上 使用 package.json 的 version
    // verbose: true, // 打印详细信息
    // usageMode: 'expand', // 自动打开文档的缩放
    pagePerSection: true, // 是否每页一个组件显示
    
    webpackConfig: {
        module: {
          rules: [
            // Babel loader will use your project’s babel.config.js
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                  },
                },
              ],
            },
            {
              test: /\.(woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/fonts',
                publicPath: url => `../assets/fonts/${url}`
              }
            },   
          ]
        }
      }
}