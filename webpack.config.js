const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssNormalize = require("postcss-normalize");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = (env, options) => {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ];

  return {
    mode: options.mode,
    devtool: options.mode !== "production" ? "inline-source-map" : undefined,
    entry: "./src/js/app.js",
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-react"],
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader", // translates CSS into CommonJS
              options: {
                sourceMap: options.mode === "development",
                importLoaders: 2,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: options.mode === "development",
                ident: "postcss",
                plugins: () => [postcssNormalize, autoprefixer, cssnano],
              },
            },
            "sass-loader", // compiles Sass to CSS
          ],
        },
        {
          test: /\.svg$/,
          use: ["svgo-loader"],
        },
        {
          test: /\.woff|woff2$/,
          loader: "file-loader",
        },
      ],
    },
  };
};
