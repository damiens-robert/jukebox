const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

let config = {
	entry: {
		loader: "./src/js/Loader.js",
		init: "./src/js/Init.js",
		index: "./src/js/Index.js"
	},
	output: {
		path: path.resolve(__dirname, "./www"),
		filename: "./js/[name].js"
	},
	module:{ 
	  rules :[
	    {
		test:/\.js$/,
		exclude: /node_modules/,
		use: "babel-loader"
	    },
	    {
		test:/\.css$/,
		use: [
			'style-loader',
			'css-loader',
		],
	    },
	    {
		test:/\.(png|svg|jpg|gif)$/,
		use: [
			'file-loader?name=[name].[ext]',
		],
	    },
	    {
		test:/\.(woff|woff2|eot|ttf|otf)$/,
		use: [
			'file-loader',
		],
	    },
	  ],
	},
	resolve: {
	  alias: {
		App: path.resolve(__dirname, './src/js/'),
	  }
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin([
                        {from: 'node_modules/onsenui/css', to: 'www/css'},
		]),
		new HtmlWebpackPlugin({
			title: 'OnDoReact',
			template: 'src/index.ejs',
			filename: 'index.html',
			inject: false,
			meta: {
				'charset': 'utf-8',
				'author': 'Damiens ROBERT',
				'viewport': 'width=device-width, initial-scale=1.0',
				'Content-Security-Policy': { 'http-equiv': 'Content-Security-Policy', 'content': "default-src 'none'; script-src https: 'self' 'unsafe-inline' www.youtube.com/iframe_api; connect-src 'none'; font-src 'self'; style-src https: 'self' 'unsafe-inline'; img-src 'self'; object-src www.youtube.com/embed/*; frame-src www.youtube.com"},
			}
		}),
	],
}

module.exports = config;
