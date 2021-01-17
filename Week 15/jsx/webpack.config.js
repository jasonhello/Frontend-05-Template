module.exports = {
    mode: "development",
    devtool: false,
    entry: "./main.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [["@babel/plugin-transform-react-jsx", { pragma: 'createElement' }]],
                    }
                }
            }
        ]
    },
};