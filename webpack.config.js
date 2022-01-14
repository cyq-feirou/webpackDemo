const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
    //   {
    //     test: /\.jsx?$/,
    //     loader: "eslint-loader", // 先进行代码校验，然后再编译代码
    //     enforce: "pre", // 强制指定顺序 pre之前 （pre,normal inline post)
    //     options: { fix: true }, // 启动自动修复
    //     include: path.resolve(__dirname, "src"), // 只检查src目录里面的文件 白名单
    //     exclude: /node_module$/, // 忽略node_module 黑名单
    //   },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        // use: [{
        //     loader: 'url-loader',
        //     options: {
        //         name: '[hash:10].[ext]',
        //         esModule: false,// 如果为true，图片取值要（path.default)
        //         limit: 1024
        //     }
        // }]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      title: "Development",
    }),
  ],
};
