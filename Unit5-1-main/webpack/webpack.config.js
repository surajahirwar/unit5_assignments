const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(".", "build"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [{ test: /\.css$/, use: ['style-loader','css-loader'] },{test: /\.(jpe?g|png|gif|svg)$/, loader: "file-loader", options: {
            name: '/Todo-logo.png'
          }}],
        
    },
};