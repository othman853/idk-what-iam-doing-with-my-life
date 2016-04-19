var path = require("path");

module.exports = [{
  context: path.join(__dirname, "public", "components"),
  entry: "main",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx-loader?harmony"}
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    root: [path.join(__dirname, "public", "components")],
    modulesDirectories: ["node_modules"]
  }
}];
