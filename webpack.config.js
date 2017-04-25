module.exports = {
	entry: "./src/index.js",
	output: {
    path: "/public",
		filename: "bundle.js"
	},
	module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader',
          'babel-loader'
        ]
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      }
    ]
  }
}