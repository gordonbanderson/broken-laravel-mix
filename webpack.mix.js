let mix = require('laravel-mix');


mix
    // This is required for hot reloading
    .setPublicPath('./dist')
    // Add eslint to .jsx, .js and .vue files
    .webpackConfig({
        module: {
            rules: [
                {
                    test: /\.(jsx|js|vue)$/,
                    loader: 'eslint-loader',
                    enforce: 'pre',
                    exclude: /(node_modules)/,
                    options: {
                        formatter: require('eslint-friendly-formatter')
                    }
                }
            ]
        },
    })
    .js('src/js/app.js', 'dist/js').react().sourceMaps()
    .extract(['react', 'react-dom'])
