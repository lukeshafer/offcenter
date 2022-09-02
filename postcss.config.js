module.exports = {
	plugins: [
		require('autoprefixer'),
		require('cssnano'),
		require('postcss-preset-env')({
			features: {
				'nesting-rules': true,
				'has-pseudo-class': true,
			},
		}),
	],
};