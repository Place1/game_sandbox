const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const plugins = [
	new CopyWebpackPlugin([{
		from: './src/assets',
		to: './assets/'
	}])
]

module.exports = {
	devtool: 'source-map',
	entry: './src/index.ts',
	output: {
		path: './dist/',
		filename: 'bundle.js',
		publicPath: 'dist'
	},
	resolve: {
		// Add '.ts' and '.tsx' as a resolvable extension.
		extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},
	plugins: plugins,
	module: {
		loaders: [{
			test: /.ts$/,
			loader: 'ts-loader'
		}, {
			test: /\.(png|jpeg|woff|woff2|eot|ttf|svg)$/,
			loader: 'url-loader?limit=100000'
		}]
	},
	devServer: {
		port: 8000
	}
};
