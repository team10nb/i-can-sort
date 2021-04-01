const path = require('path')

const packagePath = path.resolve(
    __dirname,
    './package.json'
)
const packageFile = require(packagePath)


module.exports = {
  title: "Project title", 
  version: packageFile.version, 
  usageMode: 'expand', 
  pagePerSection: true, 
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
            './src/scenes/subPages/Tutorial/Swap/Swap.jsx',
            './src/scenes/subPages/Tutorial/Loop/Loop.jsx',
            './src/scenes/subPages/Tutorial/Terminology/Terminology.jsx',
          ]
        },
        {
          name: 'Procedure',
          components: 
          [
            './src/scenes/mainPages/Procedure.jsx',
            './src/scenes/subPages/Procedure/ProcedureSubPage.jsx',
          ]
        },
        {
          name: 'Correctness',
          components: 
          [
            './src/scenes/mainPages/Correctness.jsx',
            './src/scenes/subPages/Correctness/CorrectnessTutorial.jsx',
            './src/scenes/subPages/Correctness/CorrectnessProof.jsx',
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