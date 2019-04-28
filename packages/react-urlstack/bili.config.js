module.exports = {
	input: ['src/index.js'],
	output: {
		format: ['cjs-min'],
		sourceMap: true,
		fileName: 'react-urlstack.js'
	},
	globals: {
		react: 'React',
		'prop-types': 'PropTypes',
		'react-native': 'ReactNative'
	},
	externals: ['react-native'],
	banner: { name: 'react-urlstack' }
}