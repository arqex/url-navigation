import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListItem from '../../components/gallery/ui/ListItem';
import ScreenHeader from '../../components/ScreenHeader';
import {getItems} from './testItems';

class TestList extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			items: getItems()
		}

		this.baseUrl = props.baseUrl || '/list'
	}

	render() {
		let { items } = this.state;

		if (!items) {
			return this.renderNoQueue();
		}
		if (!items.length) {
			return this.renderNoArticles();
		}

		return (
			<View style={styles.container}>
				<ScreenHeader title="Person list" active={ this.props.breakPoint === 0 } />
				<FlatList data={items}
					keyExtractor={ item => item.id + '' }
					renderItem={({ item }) => this.renderItem(item)} />
			</View>
		)
	}

	renderNoQueue() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>There is no list available.</Text>
			</View>
		)
	}

	renderNoArticles() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>There are no items yet.</Text>
			</View>
		)
	}

	renderItem(item) {
		let {router} = this.props;

		return (
			<ListItem key={item.id}
				title={item.name}
				subtitle={ item.email }
				onPress={ () => router.navigate( this.baseUrl+ '/' + item.id ) } />
		)
	}

	openAddArticle() {
		let { queue } = this.props.data;
		this.props.navigation.push('addArticle', { queueId: queue.id })
	}
	
	componentWillEnter(){
		console.log( 'Stack list entering' )
	}
	
	componentWillLeave(){
		console.log( 'Stack list leaving' )
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	text: {
		textAlign: 'center'
	},
	bottomButton: {
		position: 'absolute',
		bottom: 10,
		left: 10,
		right: 10
	}
})

export default TestList;