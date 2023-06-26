const path = require('path');

module.exports = {
    mode: 'development',  // Development mode is faster and less prone to errors'
    devtool: 'eval-source-map', //eval is quicker for development but not for production
    mode: 'development',  // Development mode is faster and less prone to errors
    devServer: {
        contentBase: './public'
    },
    entry: './src/index.ts',  // File to which the ts file will sit
    module: {
        rules: [
            {
                test: /\.ts$/,  // Regex expression to make sure that all the files being compiled end with the .ts extension
                use: 'ts-loader',
                // Ts loader takes the ts and compiles it to javascript
                include: [path.resolve(__dirname, 'src')]
                // Specify the path where the files are located
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        publicPath: 'public', // Relative path to tell the server from where to serve the file
        filename: 'bundle.js',  // Name of the file to be used in the index.html
        path: path.resolve(__dirname, 'public')  //Path where the file will be saved
    }
}