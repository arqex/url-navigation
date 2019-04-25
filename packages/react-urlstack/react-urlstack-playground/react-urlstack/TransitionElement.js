import React, { Component } from 'react';
import { Animated, StyleSheet, Platform } from 'react-native';
import animatedStyles from './utils/animatedStyles';
import PropTypes from 'prop-types'

const isWeb = Platform.OS === 'web';
const defaultDuration = 500;

export default class TransitionElement extends Component {
	static propTypes = {
		/** The entering props and box */
		entering: PropTypes.object, // {props, box}
		/** The leaving props and box */
		leaving: PropTypes.object, // {props, box}
		/** The breakpoint width from the navigator */
		breakPoint: PropTypes.number,
		/** Screen indexes involved in the transition. If no transitionState is given in the SharedElement props, these values will be used as start and end points for  */
		screenIndexes: PropTypes.object // {entering, leaving}
	}

	constructor( props ){
		super(props);

		this.indexes = this.getIndexes();
		this.animatedValue = new Animated.Value( this.indexes.leaving );
		this.transition = this.getTransition();
	}

	render(){
		// If the styles returned false, we don't want the transition 
		if( this.transition === false ){
			return null;
		}

		let transitionStyles = [
			styles.container,
			this.props.leaving.props.style,
			animatedStyles( this.transition, {transition: this.animatedValue} )
		]
		
		return (
			<Animated.View style={ transitionStyles } pointerEvents="auto">
				{ this.renderChildren() }
			</Animated.View>
		)
	}

	renderChildren(){
		let props = this.props;
		let customRenderer = props.leaving.props.transitionRender;

		if( customRenderer ){
			return customRenderer({
				animatedValue: this.animatedValue,
				breakPoint: props.breakPoint,
				entering: props.entering,
				leaving: props.leaving
			})
		}

		return props.leaving.props.children;
	}

	getTransition(){
		let transitionStyle = this.props.leaving.props.transition;
		let defaultTransition = this.getDefaultTransition()

		let transition
		if( typeof transitionStyle === 'function' ){
			let props = this.props
			transition = transitionStyle( {
				breakPoint: props.breakPoint,
				entering: props.entering,
				leaving: props.leaving,
				defaultTransition: { ...defaultTransition }
			})
		}
		else {
			transition = transitionStyle;
		}

		if( transition === false ){
			return false;
		}
		else if( transition === undefined ){
			return defaultTransition
		}
		return transition
	}

	getIndexes(){
		return {
			entering: this.props.entering.props.transitionState || this.props.screenIndexes.entering,
			leaving: this.props.leaving.props.transitionState || this.props.screenIndexes.leaving,
		}
	}

	// The default transition is just a translation
	getDefaultTransition(){
		let {leaving, entering} = this.indexes;
		let leavingBox = this.props.leaving.box;
		let enteringBox = this.props.entering.box;
		let wrapperTransition = this.props.leaving.props.wrapper.transition

		return {
			styles: {
				width: this.getInterpolation( leaving, entering, leavingBox.width, enteringBox.width ),
				height: this.getInterpolation( leaving, entering, leavingBox.height, enteringBox.height ),
				translateX: this.getInterpolation( leaving, entering, leavingBox.x, enteringBox.x ),
				translateY: this.getInterpolation( leaving, entering, leavingBox.y, enteringBox.y ),
			},
			duration: (wrapperTransition && wrapperTransition.duration) || defaultDuration
		}
	}

	getInterpolation( fromIndex, toIndex, fromValue, toValue ){
		if( fromValue === toValue ) return fromValue;
		let inverted = fromIndex > toIndex;
		return {
			inputRange: inverted ? [ toIndex, fromIndex ] : [ fromIndex, toIndex ],
			outputRange: inverted ? [ toValue, fromValue ] : [ fromValue, toValue ]
		}
	}

	componentDidMount(){
		console.log( 'Mounted', this.props.entering.box, this.props.leaving.box );

		if( this.transition !== false ){
			// Start the animation
			Animated.timing( this.animatedValue, {
				toValue: this.indexes.entering,
				duration: this.transition.duration || defaultDuration,
				// useNativeDriver: !isWeb // Native driver is not animating width and height
			}).start( () => this.props.onTransitionEnd() );
		}
	}
}


const styles = StyleSheet.create({
	container: { position: 'absolute', overflow: 'hidden' }
})