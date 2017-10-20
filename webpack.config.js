const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	devtool: 'source-map',
	devServer: {
		contentBase: ['./build', './static'],
		port: 9000
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					compact: false,
					presets: ['babel-preset-env'],
					plugins: [
            ['transform-react-jsx', {
              "pragma": "Fiber.createElement"
            }]
          ]
				}
			}
		}]
	},
	output: {
		filename: './build/bundle.js'
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin()
	]
};
