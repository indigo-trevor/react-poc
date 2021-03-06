var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpackConfig = {
	entry: "./src/app.js",
	output: {
		path: "build",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				test: /\.js$/
			},
			{
				loaders: ["style", "css", "sass"],
				test: /\.scss$/
			},
			{
				test: /\.(png|jpg)$/,
      	loader: 'url?limit=25000',
				output: 'build/img'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html"
		})
	]
};

module.exports = webpackConfig;
