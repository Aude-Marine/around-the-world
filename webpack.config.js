const path = require('path')
// need the path package for an absolute path for the output / the correct folder

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js', // I want webpack to bundle this file
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        before: function(app, server) {
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true, // allow webpack to inject new CSS & JS into the browser memory without any reload or refresh hot module replacement
        port: 3000, 
        host: '192.168.56.1' //allow devices on the same network to access the webpack dev server
    },
    mode: 'development',
    //watch: true, don't need it anymore
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
        ]
    }
}