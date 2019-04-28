module.exports = {
	input: ['urlstack.js'],
	output: {
		format: ['umd'],
		sourceMap: true,
		fileName: 'urlstack.js',
		moduleName: 'urlstack'
	},
	globals: {
		react: 'React',
		'prop-types': 'PropTypes'
	},
	banner: { name: 'urlstack' }
}