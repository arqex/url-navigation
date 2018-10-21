import React, {Component} from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class ScreenWrapperNarrow extends Component {
	render(){
		return (
			<View style={ styles.container }>
				<View style={ styles.header }>
					<Text>This is a header</Text>
				</View>
				<View style={ styles.screen }>
					{ this.props.children }
				</View>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	container: {},
	header: {
		position: 'absolute',
		width: '100%',
		height: 60
	},
	screen: {
		paddingTop: 60
	}
})
