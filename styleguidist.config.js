const path = require('path')

const packagePath = path.resolve(
    __dirname,
    './package.json'
)
const packageFile = require(packagePath)


module.exports = {
  title: "Project title", // 文档名
  version: packageFile.version, // 同上 使用 package.json 的 version
  usageMode: 'expand', // 自动打开文档的缩放
  pagePerSection: true, // 是否每页一个组件显示
  sections: [
    {
      name: 'Components',
      components: './src/components/**/*.jsx',
      ignore: 
      [
        './src/components/**/*.test.jsx',
        './src/components/CorrectnessProof/**',
        './src/components/ProcedureIntroduction/**',
        './src/components/SwitchAnimation/SortingAlgorithms/**',
        './src/components/ProcedureImplementation/**',
      ]
    },
    {
      name: 'Scenes',
      sections:[
        {
          name: 'Tutorial',
          components: 
          [
            './src/scenes/mainPages/Tutorial.jsx',
            './src/scenes/subPages/Tutorial/TutorialSubPage.jsx',
          ]
        },
        {
          name: 'Procedure',
          components: 
          [
            './src/scenes/subPages/Procedure/**/*.jsx', 
            './src/scenes/mainPages/Procedure.jsx',
          ]
        },
        {
          name: 'Correctness',
          components: 
          [
            './src/scenes/subPages/Correctness/**/*.jsx', 
            './src/scenes/mainPages/Correctness.jsx'
          ]
        },
      ]
    }
  ],

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
        {
          test: /.(jpg|png|gif)$/,
          use:['url-loader']
        },
        {
          test: /\.pdf(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: ['file-loader']
        },  
      ]
    }
  }
}