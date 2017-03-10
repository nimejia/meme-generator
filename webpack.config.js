const path = require('path');

var config = {
    entry: path.resolve(__dirname, 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js"
        ]
    },
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
};

module.exports = config;