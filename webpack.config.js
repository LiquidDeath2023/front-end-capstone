const path = require("path");

module.exports = {
  // where to start application bundling(compiling) process
  entry: path.join(__dirname, "/client/src/index.tsx"),
  // where to put bundled file, and what to call it
  output: {
    path: path.join(__dirname, "/client/dist"),
    filename: "bundle.js",
  },
  // our compiler module's rules
  module: {
    rules: [
      // `js` and `jsx` files are parsed using `babel`
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // `ts` and `tsx` files are parsed using `ts-loader`
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // resolves (compiles) extensions in the order in the array
  resolve: {
    extensions: [".*", ".js", ".jsx", ".ts", ".tsx", ".css"],
  },
  // just semantics really - makes it known that this is dev stuff
  mode: "development",
  // after initial build, webpack watches for changes in resolved files
  watch: true,
};
