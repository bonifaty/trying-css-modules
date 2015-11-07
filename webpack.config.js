module.exports = {
    entry: ['./assets/js/index.js'],
    output: {
        path: './assets/_/js',
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
            { test: /\.styl$/, loader: 'style-loader!css-loader?modules!stylus-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader!jsx-loader?harmony" }
        ]
    }
};