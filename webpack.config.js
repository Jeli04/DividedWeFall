const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = () => {
    return {
        target: ['web'],
        entry: path.resolve(__dirname, 'src/models/main.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.min.js',
            library: {
                type: 'umd'
            }
        },
        plugins: [new CopyPlugin({
            // Use copy plugin to copy *.wasm to output folder.
            patterns: [{ from: 'node_modules/onnxruntime-web/dist/*.wasm', to: '[name][ext]' }]
        })],
        mode: 'production'
    }
};