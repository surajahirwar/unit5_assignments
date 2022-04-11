const path=require("path")

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(".","build"),
        filename:"bundle.js"
    },
    mode:"development",
     module: { rules: [
         { test: /\.(png|jpe?g|gif)$/i, use: [{ loader: 'file-loader',} ,],},
         { test: /\.css$/i, use: ["style-loader", "css-loader"],},
    ],
  },
}