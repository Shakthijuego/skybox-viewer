const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
var babelModule ={
rules:[{
    test: /.jsx/,
        use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-react','@babel/preset-env'],
              plugins: [
                "@babel/plugin-proposal-class-properties"
              ]
            },
            
        } 
}]
}

module.exports = {
    //...
    mode:'development',
    entry: "./index.js",
    module: babelModule,
    output: {
        filename: 'dist/bundle.js',
      },
      devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000
      },
      plugins: [
        new HtmlWebpackPlugin()
      ],
};
