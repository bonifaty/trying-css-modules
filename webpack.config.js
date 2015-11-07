module.exports = {
    entry: ['./assets/js/index.js'],
    output: {
        path: './assets/_/js',
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.styl$/, loader: 'style-loader!css-loader?modules!stylus-loader' },
            { test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets:['es2015','react']
                }
            }
        ]
    }
};