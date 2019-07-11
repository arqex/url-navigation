import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class TestModal extends Component {
	render(){
		return (
			<View style={{height: '100%'}}>
				<Text>This is the modal's content</Text>
			</View>
		)
	}
	
	componentWillEnter(){
		console.log( 'Modal entering' )
	}
	
	componentWillLeave(){
		console.log( 'Modal leaving' )
	}
}

TestModal.navigatorOptions = {}
