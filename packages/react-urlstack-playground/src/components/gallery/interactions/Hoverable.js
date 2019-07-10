import PropTypes from "prop-types";
import React, { Component } from "react";
import {TouchableNativeFeedback, TouchableOpacity, TouchableHighlight, View, Platform} from 'react-native';

let isWeb = typeof window !== 'undefined' && !!window.document;

const touchableComponents = {
	native: TouchableNativeFeedback,
	opacity: TouchableOpacity,
	highlight: TouchableHighlight,
	default: Platform.OS === 'Android' ? TouchableNativeFeedback : TouchableOpacity,
	none: View
}

export default class Hoverable extends Component {
	static propTypes = {
		/** The children of the hoverable */
		children: PropTypes.node,
		/** Type of touchable used as a wrapper element for the content. The `default` one is using TouchableNativeFeedback for `android` and TouchableOpacity for others. */
		touchable: PropTypes.oneOf(['opacity', 'highlight', 'native', 'default', 'none']),
		/** Styles for the container when hovering */
		hoverStyle: PropTypes.object
	}

	static defaultProps = {
		touchable: 'default',
		hoverStyle: {}
	}

	constructor(props){
		super(props)
		if( isWeb ){
			this.cn = props.id || 'h' + Math.round( Math.random() * 1000000 ).toString(36)
		}
	}

	render() {
		const { children, hoverStyle, touchable, onPress, ...touchableProps } = this.props;
		let css;

		
		let tonPress = e => {
			onPress && onPress( e )
		}

		if( this.cn ){
			touchableProps['data-cn'] = this.cn
			css = (
				<style>{ this.renderHoverStyle( hoverStyle ) }</style>
			)
		}

		let C = touchableComponents[touchable];

		return (
			<C onPress={ tonPress } { ...touchableProps }>
				{ children }
				{ css }
			</C>
		)
	}

	renderHoverStyle( hoverStyle ){
		let css = '';
		Object.keys( hoverStyle ).forEach( selector => {
			if( selector === 'wrapper' ){
				css += `[data-cn=${ this.cn }]:hover { ${hoverStyle[selector]} } `
			}
			else {
				css += `[data-cn=${ this.cn }]:hover .${selector} { ${hoverStyle[selector]} } `
			}
		})
		return css;
	}
}