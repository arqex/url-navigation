import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import { getById } from './testItems'
import ScreenHeader from '../../components/ScreenHeader';

export default class TestDetails extends Component {
	render() {
		let props = this.props;
		let details = getById( props.location.params.id );
		let list = []
	
		Object.keys( details ).forEach( key => {
			list.push(
				<View key={ key }>
					<Text>{ key }</Text>
					<Text>{ details[key] }</Text>
				</View>
			)
		})
	
		return (
			<View>
				<ScreenHeader title="Person details" active={ props.breakPoint === 0 } />
				{ list }
				<TouchableHighlight onPress={ () => props.router.navigate( props.router.location.pathname + '/moreInfo') }>
					<Text>More details</Text>
				</TouchableHighlight>
			</View>
		)
	}

	componentWillEnter(){
		console.log( 'Details entering' )
	}
	
	componentWillLeave(){
		console.log( 'Details leaving' )
	}
} 