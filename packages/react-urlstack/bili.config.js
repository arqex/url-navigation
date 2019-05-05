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
		'react-native': 'ReactNative',
		urlstack: 'urlstack',
		'react-interactable': 'Interactable'
	},
	externals: ['react-native'],
	banner: { name: 'react-urlstack' }
}