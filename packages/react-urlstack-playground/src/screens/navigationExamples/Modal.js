import React from 'react'
import {View, Text} from 'react-native'


function TestModal( props ){
	console.log( props )
	return (
		<View style={{height: '100%'}}>
			<Text>This is the modal's content</Text>
		</View>
	)
}

TestModal.navigatorOptions = {}

export default TestModal
