module.exports = {
	devtool: 'source-map',
	entry: './src/index.js',
	output: {
		path: './dist/',
		filename: 'bundle.js',
		publicPath: 'dist'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'stage-1']
			}
		}, {
			test: /\.(png|jpeg|woff|woff2|eot|ttf|svg)$/,
			loader: 'url-loader?limit=100000'
		}]
	},
	devServer: {
		port: 8000
	}
};
