module.exports = {
	input: ['urlhub.js'],
	output: {
		format: ['umd'],
		sourceMap: true,
		fileName: 'urlhub.js',
		moduleName: 'urlhub'
	},
	globals: {
		react: 'React',
		'prop-types': 'PropTypes'
	},
	banner: { name: 'urlhub' }
}