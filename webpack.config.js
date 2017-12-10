"use strict";

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: 'source-map',
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		path.join(__dirname, 'src', 'index'),
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new ExtractTextPlugin("styles.css"),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			//SASS
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: ['css-loader?sourceMap=true', 'sass-loader?outputStyle=compressed&sourceMap=true'],
				})
			},
			
			//IMAGES
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			
			//FONTS
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			},
			
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: /src/,
				use: ['babel-loader']
			}
		]
	}
};