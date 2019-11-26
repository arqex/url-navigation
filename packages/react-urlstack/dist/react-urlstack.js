/*!
 * react-urlstack v0.3.20
 * (c) Javier Marquez
 * Released under the MIT License.
 */
"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),PropTypes=_interopDefault(require("prop-types")),createRouter=_interopDefault(require("urlstack")),reactNative=require("react-native"),Interactable=_interopDefault(require("react-interactable"));function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,a=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function memoize(e){var t,n;function r(r){return t=r,n=e.apply(null,r)}return function(){if(!t||t.length!==arguments.length)return r(arguments);for(var e=0;e<t.length;){if(t[e]!==arguments[e])return r(arguments);e++}return n}}function createId(){return Math.round(1e7*Math.random()).toString(36)}function nofn(){}function bind(e,t){t.forEach(function(t){e[t]=e[t].bind(e)})}var tabTransition={styles:function(e,t){var n=t.width/2;return{translateX:{inputRange:[-2,-1,0,1,2],outputRange:[n,n,0,-n,-n]},opacity:{inputRange:[-2,-1,0,.8,1],outputRange:[0,0,1,0,0]}}},easing:reactNative.Easing.linear,duration:300};function animatedStyles(e,t,n){var r="function"==typeof e.styles?e.styles(t,n):e.styles;r||(r={});var a={},i=[];return t.count&&(a.zIndex=t.count-Math.abs(t.relative)),Object.keys(r).forEach(function(e){var n=r[e];if(styleKeys[e])warnKeys[e]&&console.warn("react-urlstack: It's possible in web, but react-native won't animate the property \"".concat(e,'"')),n&&n.inputRange?a[e]=t.transition.interpolate(n):a[e]=n;else if(transformKeys[e]){var o=transformKeys[e],s=!1;n&&n.outputRange?(r[e].outputRange.forEach(function(t){s||_typeof(t)===o||(s=!0,console.warn('react-urlstack: Even if it works in web, react-native only accepts type "'.concat(transformKeys[e],'" for "').concat(e,'". Given "').concat(t,'".')))}),i.push(_defineProperty({},e,t.transition.interpolate(n)))):i.push(_defineProperty({},e,n))}else console.warn('react-urlstack: Unknown property to animate "'.concat(e,'"'))}),i.length&&(a.transform=i),a}var styleKeys={},warnKeys={};["left","right","top","bottom"].forEach(function(e){styleKeys[e]=1,warnKeys[e]=1}),["width","height","opacity","backgroundColor","borderRadius"].forEach(function(e){styleKeys[e]=1});var n="number",s="string",transformKeys={perspective:n,rotate:s,rotateX:s,rotateY:s,rotateZ:s,scale:n,scaleX:n,scaleY:n,translateX:n,translateY:n,skeyX:s,skewY:s};function stagger(e,t,n,r){var a=new reactNative.Animated.Value(e._value);reactNative.Animated.timing(a,{duration:0,toValue:e}).start();for(var i=[animatedStyles({styles:r},{transition:a})],o=function(e){var n={};Object.keys(r).forEach(function(a){var i=r[a];if(i&&i.inputRange){var o={inputRange:[],outputRange:i.outputRange};i.inputRange.forEach(function(n){o.inputRange.push(n+e*t)}),n[a]=o}else n[a]=i});var o=animatedStyles({styles:n},{transition:a});i.push(o)},s=1;s<n;s++)o(s);return i}var Context=React__default.createContext(),ScreenContent=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,React.Component),_createClass(t,[{key:"render",value:function(){return this.props.renderScreen()}},{key:"shouldComponentUpdate",value:function(){return!this.props.animating}}]),t}(),ScreenWrapper=function(e){function t(e){var n;return _classCallCheck(this,t),_defineProperty(_assertThisInitialized(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))),"_renderScreen",function(){var e=n.props,t=e.item,r=e.ScreenStack,a=e.router,i=e.transition,o=e.indexes,s=e.layout,c=e.drawer,u=e.breakPoint,l=e.navProps,p=t.Screen,d=t.location,h=p.prototype instanceof React.Component?n.screenRef:void 0;return t.isTabs?React__default.createElement(p,_extends({router:a,ref:h,location:d,indexes:o,layout:s,drawer:c,breakPoint:u},l),React__default.createElement(r,{router:a,isTabs:!0,screenTransition:i.tabTransition||tabTransition,stack:t.tabs.stack,index:t.tabs.activeIndex,parentIndexes:o,layout:s,breakPoint:u,navProps:l})):React__default.createElement(p,_extends({router:a,ref:h,location:d,indexes:o,layout:s,drawer:c,breakPoint:u},l))}),n.id=createId(),n.screenRef=React.createRef(),n.setAnimatedLayout(e.indexes,e.layout),n}return _inherits(t,React.Component),_createClass(t,[{key:"render",value:function(){var e=this,t=this.props.item,n=[styles.container,this.animatedStyles],r={transition:this.props.transition,indexes:this.props.indexes,id:t.key};return React__default.createElement(reactNative.Animated.View,{style:n,onLayout:function(){return e.props.onReady(t.key)}},React__default.createElement(Context.Provider,{value:r},React__default.createElement(ScreenContent,{renderScreen:this._renderScreen,animating:this.props.animating})))}},{key:"setAnimatedLayout",value:function(e,t){var n=this.props.transition;this.animatedStyles=n?animatedStyles(n,e,t):{}}},{key:"componentWillReceiveProps",value:function(e){this.hasLayoutChanged(e)&&this.setAnimatedLayout(e.indexes,e.layout)}},{key:"hasLayoutChanged",value:function(e){if(e.indexes){var t=e.layout.width,n=e.indexes,r=n.screen,a=n.relative,i=this.props,o=i.layout,s=i.indexes;return t!==o.width||r!==s.screen||a!==s.relative||this.props.transition!==e.transition}}},{key:"componentWillUnmount",value:function(){this.props.isShowing&&0===this.props.indexes.relative&&this.triggerCycleMethod("componentWillLeave"),this.props.onUnmount(this.props.item.key)}},{key:"componentDidMount",value:function(){this.props.isShowing&&0===this.props.indexes.relative&&this.triggerCycleMethod("componentWillEnter")}},{key:"componentWillEnter",value:function(){this.triggerCycleMethod("componentWillEnter")}},{key:"componentWillLeave",value:function(){this.triggerCycleMethod("componentWillLeave")}},{key:"triggerCycleMethod",value:function(e){var t=this.screenRef;t&&t.current&&t.current[e]&&this.lastLFMethod!==e&&t.current[e](),this.lastLFMethod=e}}]),t}();_defineProperty(ScreenWrapper,"defaultProps",{onReady:nofn,onUnmount:nofn});var styles=reactNative.StyleSheet.create({container:{overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:10}}),isWeb="web"===reactNative.Platform.OS,defaultDuration=500,TransitionElement=function(e){function t(e){var n;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).indexes=n.getIndexes(),n.animatedValue=new reactNative.Animated.Value(n.indexes.leaving),n.transition=n.getTransition(),n}return _inherits(t,React.Component),_createClass(t,[{key:"render",value:function(){if(!1===this.transition)return null;var e=[styles$1.container,this.props.leaving.props.style,animatedStyles(this.transition,{transition:this.animatedValue})];return React__default.createElement(reactNative.Animated.View,{style:e,pointerEvents:"auto"},this.renderChildren())}},{key:"renderChildren",value:function(){var e=this.props,t=e.leaving.props.transitionRender;return t?t({animatedValue:this.animatedValue,breakPoint:e.breakPoint,entering:e.entering,leaving:e.leaving}):e.leaving.props.children}},{key:"getTransition",value:function(){var e,t=this.props.leaving.props.transition,n=this.getDefaultTransition();if("function"==typeof t){var r=this.props;e=t({breakPoint:r.breakPoint,entering:r.entering,leaving:r.leaving,defaultTransition:Object.assign({},n)})}else e=t;if(!1===e)return!1;if(void 0===e)return n;e.duration||(e.duration=n.duration);var a=e.styles,i=n.styles;return a||(a={},e.style=a),Object.keys(i).forEach(function(e){void 0===a[e]&&(a[e]=i[e])}),e}},{key:"getIndexes",value:function(){return{entering:this.props.entering.props.transitionState||this.props.screenIndexes.entering,leaving:this.props.leaving.props.transitionState||this.props.screenIndexes.leaving}}},{key:"getDefaultTransition",value:function(){var e=this.indexes,t=e.leaving,n=e.entering,r=this.props.leaving.box,a=this.props.entering.box,i=this.props.leavingTransition;return{styles:{width:this.getInterpolation(t,n,r.width,a.width),height:this.getInterpolation(t,n,r.height,a.height),translateX:this.getInterpolation(t,n,r.x,a.x),translateY:this.getInterpolation(t,n,r.y,a.y)},duration:i&&i.duration||defaultDuration}}},{key:"getInterpolation",value:function(e,t,n,r){if(n===r)return n;var a=e>t;return{inputRange:a?[t,e]:[e,t],outputRange:a?[r,n]:[n,r]}}},{key:"componentDidMount",value:function(){var e=this;!1!==this.transition&&reactNative.Animated.timing(this.animatedValue,{toValue:this.indexes.entering,duration:this.transition.duration||defaultDuration}).start(function(){return e.props.onTransitionEnd()})}}]),t}();_defineProperty(TransitionElement,"propTypes",{entering:PropTypes.object,leaving:PropTypes.object,breakPoint:PropTypes.number,screenIndexes:PropTypes.object});var styles$1=reactNative.StyleSheet.create({container:{position:"absolute",overflow:"hidden",top:0,left:0}}),Context$1=React__default.createContext("sharedElement"),mountedElements={};function register(e,t){var n=t.wrapper.id;mountedElements[n]||(mountedElements[n]=[]),mountedElements[n].push(e)}function unregister(e){var t=e.props.wrapper.id,n=mountedElements[t];if(n&&n)for(var r=n.length;r-- >0;)n[r]===e&&n.splice(r,1)}var breakPoint,screenIndexes,clbks=[];function reMeasure(e,t,n){var r=Object.keys(mountedElements);if(!(r.length<2)){breakPoint=t,screenIndexes=n;var a={x:e.x,y:e.y};r.forEach(function(e){mountedElements[e].forEach(function(e){e.measure(a)})})}}function startTransition(e,t,n,r){clbks.forEach(function(a){return a(e,t,n,r)})}var TransitionLayer=function(e){function t(e){var n;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).state={elements:[]},n.checkForTransitions=n.checkForTransitions.bind(_assertThisInitialized(n)),n}return _inherits(t,React.Component),_createClass(t,[{key:"render",value:function(){var e=this.props.layout,t={top:e.y||0,right:(e.x||0)+e.width,left:e.x||0,bottom:(e.y||0)+e.height},n=this.state.elements,r=Object.keys(n).map(function(e){return n[e]});return React__default.createElement(reactNative.View,{style:[styles$2.container,t],pointerEvents:"none"},r)}},{key:"checkForTransitions",value:function(e,t,n,r){var a=this.getTransitionCouples(e,t);a.length&&(this.leavingTransition=r,this.waitForReadyAndRender(a,n))}},{key:"waitForReadyAndRender",value:function(e,t){for(var n=this,r=e.length;r-- >0;)if(!e[r].leaving.box||!e[r].entering.box)return setTimeout(function(){return n.waitForReadyAndRender(e,t)});var a={};e.forEach(function(e){var t=createId();a[t]=n.renderElement(e,t)}),this.setState({elements:a})}},{key:"renderElement",value:function(e,t){var n=this,r=e.leaving,a=e.entering;return React__default.createElement(TransitionElement,{key:t,leaving:r,entering:a,breakPoint:breakPoint,screenIndexes:screenIndexes,leavingTransition:this.leavingTransition&&this.leavingTransition(breakPoint),onTransitionEnd:function(){return n.removeElement(t)}})}},{key:"removeElement",value:function(e){var t=Object.assign({},this.state.elements);delete t[e],this.setState({elements:t})}},{key:"cleanProps",value:function(e){var t={};return Object.keys(e).forEach(function(n){"se"!==n&&"wrapper"!==n&&"children"!==n&&"transitionStyles"!==n&&(t[n]=e[n])}),t}},{key:"getTransitionCouples",value:function(e,t){var n={},r=[];return e.forEach(function(e){mountedElements[e]&&mountedElements[e].forEach(function(e){n[e.props.sharedId]=e})}),t.forEach(function(e){mountedElements[e]&&mountedElements[e].forEach(function(e){n[e.props.sharedId]&&r.push({leaving:n[e.props.sharedId],entering:e})})}),r}},{key:"componentDidMount",value:function(){clbks.push(this.checkForTransitions)}},{key:"componentWillUnmount",value:function(){for(var e=clbks.length;e-- >0;)clbks[e]===this.checkForTransitions&&clbks.splice(e,1)}}]),t}(),styles$2=reactNative.StyleSheet.create({container:{position:"absolute",zIndex:1e4}}),SharedElementWrapper=function(e){return React__default.createElement(Context$1.Provider,{value:{register:register,unregister:unregister,startTransition:startTransition,reMeasure:reMeasure}},e.children,React__default.createElement(TransitionLayer,{router:e.router,layout:e.layout}))},isWeb$1="web"===reactNative.Platform.OS,ScreenStack=function(e){function t(e){var n;_classCallCheck(this,t),_defineProperty(_assertThisInitialized(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))),"_endAnimation",function(){setTimeout(function(){n.setState({animating:!1},function(){n.forceUpdate()})},16)});var r=e.stack,a=e.index;return n.state={indexes:n.calculateIndexes({},r,a),layout:!1},n.screenRefs={},n.previousIndex=a,n.previousScreen=r[a]&&r[a].key,n.calculateIndexes=memoize(n.calculateIndexes.bind(_assertThisInitialized(n))),n.updateRelativeIndexes=memoize(n.updateRelativeIndexes.bind(_assertThisInitialized(n))),n.readyScreens={},bind(_assertThisInitialized(n),["_onScreenReady","_onScreenUnmount"]),n}return _inherits(t,React.Component),_createClass(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.stack,r=t.router,a=[styles$3.container,this.animatedStyles];return React__default.createElement(reactNative.Animated.View,{style:a},React__default.createElement(reactNative.View,{style:styles$3.stack,onLayout:function(t){return e.updateLayout(t)}},this.renderScreens(r,n)))}},{key:"renderScreens",value:function(e,n){var r=this,a=this.state,i=a.layout,o=a.indexes;if(i){var s=[],c=this.props.stackIndexes.showing;return n.forEach(function(n){var a=n.key;o[a]&&(r.screenRefs[a]||(r.screenRefs[a]=React.createRef()),s.push(React__default.createElement(ScreenWrapper,{item:n,animating:r.props.animating||r.state.animating,ref:r.screenRefs[a],ScreenStack:t,router:e,indexes:o[a],layout:i,transition:r.getScreenTransition(n.Screen),onReady:r._onScreenReady,onUnmount:r._onScreenUnmount,drawer:r.props.drawer,breakPoint:r.props.breakPoint,key:a,isShowing:c,navProps:r.props.navProps})))}),s}}},{key:"getScreenTransition",value:function(e){if("function"==typeof e.getTransition){var t=e.getTransition(this.props.breakPoint);if(!1===t)return;if(t)return t}return this.props.screenTransition}},{key:"updateLayout",value:function(e){this.setState({layout:e.nativeEvent.layout}),this.animatedStyles=animatedStyles(this.props.stackTransition,this.props.stackIndexes,e.nativeEvent.layout)}},{key:"componentDidUpdate",value:function(e){var t=this,n=this.props,r=n.stack,a=n.index,i=n.screenTransition,o=this.calculateIndexes(this.state.indexes,r,this.previousIndex,i);if(o!==this.state.indexes&&this.setState({indexes:o}),this.needRelativeUpdate){this.context.reMeasure(this.props.layout,this.props.breakPoint,this.transitionIndexes),this.transitionIndexes=!1;var s=this.updateRelativeIndexes(o,r,a);setTimeout(function(){t.needRelativeUpdate=!1,t.startTransition(t.state.indexes,s),t.setState({indexes:s})})}var c=r[a];if(c){a===this.previousIndex&&c.key===this.previousScreen||(this.transitionIndexes={leaving:this.previousIndex,entering:a},this.needRelativeUpdate=!0,this.previousIndex=a,this.previousScreen=c.key,this.forceUpdate());var u=e.stackIndexes.showing,l=this.props.stackIndexes.showing;u&&!l&&this.triggerCycleMethod(this.getCurrentItem(),"componentWillLeave"),!u&&l&&this.triggerCycleMethod(this.getCurrentItem(),"componentWillEnter")}}},{key:"calculateIndexes",value:function(e,t,n){var r=this,a=t.length,i=Object.assign({},e),o=Object.assign({},e),s=!1;return t.forEach(function(e,t){var c=e.key;if(o[c])return delete o[c];s=!0,i[c]={screen:t,count:a,relative:n-t,transition:new reactNative.Animated.Value(n-t),parent:r.props.parentIndexes}}),Object.keys(o).forEach(function(e){delete i[e],delete r.screenRefs[e],s=!0}),s?i:e}},{key:"updateRelativeIndexes",value:function(e,t,n){var r=this,a=Object.assign({},e),i=t.length;return t.forEach(function(e,t){var o=e.key,s={screen:t,count:i,relative:n-t,transition:a[o].transition,parent:r.props.parentIndexes};a[o]=s}),a}},{key:"startTransition",value:function(e,t){var n,r,a,i=this;this.props.stack.forEach(function(o){var s=o.key,c=o.Screen,u=e[s],l=t[s];if(0===u.relative&&(n=o),0===l.relative&&(r=o,a=u.relative),u&&l&&u.relative!==l.relative){i.setState({animating:!0});var p=i.getScreenTransition(c);reactNative.Animated.timing(l.transition,{toValue:l.relative,easing:p.easing,duration:p.duration||300,useNativeDriver:!isWeb$1}).start(i._endAnimation)}}),n&&r&&n!==r&&(this.props.stackIndexes.showing&&(this.triggerCycleMethod(n,"componentWillLeave"),this.triggerCycleMethod(r,"componentWillEnter")),this.context.startTransition(this.getActiveScreens(n),this.getActiveScreens(r),a,n.Screen.getTransition))}},{key:"getActiveScreens",value:function(e){var t=[e.key],n=e.tabs;return n&&(t=t.concat(this.getActiveScreens(n.stack[n.activeIndex]))),t}},{key:"getCurrentItem",value:function(){for(var e=this.props.stack,t=e.length,n=this.state.indexes;t-- >0;){var r=e[t];if(0===n[r.key].relative)return r}}},{key:"triggerCycleMethod",value:function(e,t){if(e){var n=this.screenRefs[e.key];n&&n.current&&n.current[t]&&n.current[t]()}}},{key:"_onScreenReady",value:function(e){this.readyScreens[e]=1}},{key:"_onScreenUnmount",value:function(e){delete this.readyScreens[e]}},{key:"shouldComponentUpdate",value:function(){return!this.props.animating}}]),t}();_defineProperty(ScreenStack,"propTypes",{router:PropTypes.object,screenTransition:PropTypes.object,stackTransition:PropTypes.object,stackIndexes:PropTypes.object,stack:PropTypes.array,index:PropTypes.number,layout:PropTypes.object}),_defineProperty(ScreenStack,"defaultProps",{stackTransition:{},stackIndexes:{}}),_defineProperty(ScreenStack,"contextType",Context$1);var styles$3=reactNative.StyleSheet.create({container:{flex:1,position:"relative",zIndex:1},drawer:{},stack:{height:"100%",width:"100%"}}),ModalWrapper=function(e){function t(e){var n;return _classCallCheck(this,t),_defineProperty(_assertThisInitialized(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))),"_renderScreen",function(){var e=n.props.stack[0],t=e.Screen.prototype instanceof React.Component?n.screenRef:void 0;return React__default.createElement(e.Screen,_extends({router:n.props.router,ref:t,drawer:n.props.drawer,indexes:n.props.indexes,layout:n.props.layout,location:e.location,breakPoint:n.props.breakPoint},n.props.navProps))}),n.screenRef=React.createRef(),n.setAnimatedLayout(e.indexes,e.layout),n}return _inherits(t,React.Component),_createClass(t,[{key:"render",value:function(){var e,t=[styles$4.container,this.animatedStyles];return this.props.stack[0]&&(e=React__default.createElement(ScreenContent,{renderScreen:this._renderScreen,animating:this.props.animating})),React__default.createElement(reactNative.Animated.View,{style:t},e)}},{key:"getScreenItem",value:function(e){return e&&e!==this.item&&(this.item=e),this.item}},{key:"setAnimatedLayout",value:function(e,t){this.animatedStyles=animatedStyles(this.props.transition,e,t)}},{key:"componentWillReceiveProps",value:function(e){this.hasLayoutChanged(e)&&this.setAnimatedLayout(e.indexes,e.layout)}},{key:"hasLayoutChanged",value:function(e){if(e.indexes){var t=e.layout.width,n=e.indexes.showing,r=this.props,a=r.layout,i=r.indexes;return t!==a.width||n!==i.showing}}},{key:"componentWillUnmount",value:function(){this.props.indexes.showing&&this.triggerCycleMethod("componentWillLeave")}},{key:"componentDidMount",value:function(){this.props.indexes.showing&&this.triggerCycleMethod("componentWillEnter")}},{key:"componentDidUpdate",value:function(e){var t=e.indexes.showing,n=this.props.indexes.showing;t&&!n?this.triggerCycleMethod("componentWillLeave"):!t&&n&&this.triggerCycleMethod("componentWillEnter")}},{key:"triggerCycleMethod",value:function(e){var t=this.screenRef;t&&t.current&&t.current[e]&&this.lastLFMethod!==e&&t.current[e](),this.lastLFMethod=e}}]),t}(),styles$4=reactNative.StyleSheet.create({container:{overflow:"hidden",position:"absolute",width:"100%",height:"100%",top:0,left:0,zIndex:10,shadowColor:"#000",shadowOpacity:.1,shadowRadius:10,elevation:3}}),handleWidth=15,DrawerWrapper=function(e){function t(e){var n;_classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).layoutUpdated=!1,n.drawerWidth=300,n.drawerPos=new reactNative.Animated.Value(0),n.calculateDrawerIndex(),n.state={open:!1},n.overlayAnimStyle={transform:[{translateX:n.drawerIndex.interpolate({inputRange:[0,.01,1],outputRange:[-1e4,0,0]})}],opacity:n.drawerIndex.interpolate({inputRange:[0,0,1,1],outputRange:[0,0,.5,.5]})};var r={open:function(){return n.openDrawer()},close:function(){return n.closeDrawer()}};return n._drawerMethods=r,n}return _inherits(t,React.Component),_createClass(t,[{key:"render",value:function(){var e,t,n=this,r=this.props,a=r.Drawer,i=r.router,o=r.collapsible,s=r.navProps;o&&(e=React__default.createElement(reactNative.View,{style:styles$5.handle}),t=React__default.createElement(reactNative.Animated.View,{style:[styles$5.overlay,this.overlayAnimStyle],onClick:function(){return n.closeDrawer()}}));var c=this.state.open?2*this.drawerWidth:this.drawerWidth+handleWidth,u=this.layoutUpdated?-this.drawerWidth:-3e3,l=[styles$5.container,o&&styles$5.collapsibleContainer,o&&{width:c,left:u},this.animatedStyles],p=[styles$5.drawer,o&&styles$5.collapsibleDrawer],d=[{x:0,id:"closed"},{x:this.drawerWidth,id:"open"}];return React__default.createElement(reactNative.Animated.View,{style:l},t,React__default.createElement(Interactable.View,{dragEnabled:!!o,ref:"drawer",horizontalOnly:!0,snapPoints:d,boundaries:{right:this.drawerWidth,bounce:0},onDrag:function(e){return n.onDrag(e)},animatedValueX:this.drawerPos},React__default.createElement(reactNative.View,{style:p,ref:"layout",onLayout:function(e){return n.updateLayout(e)}},React__default.createElement(a,_extends({router:i,drawer:this._drawerMethods,layout:this.props.layout,breakPoint:this.props.breakPoint,indexes:{transition:this.drawerIndex}},s)),e)))}},{key:"updateLayout",value:function(e){var t=e.nativeEvent.layout;this.layoutUpdated=!0,this.animatedStyles=animatedStyles(this.props.transition,this.props.indexes,t),this.drawerWidth=t.width-handleWidth,this.calculateDrawerIndex(),this.forceUpdate()}},{key:"componentDidUpdate",value:function(e){var t=this;e.collapsible!==this.props.collapsible&&this.drawerPos.setValue(0),e.breakPoint!==this.props.breakPoint&&this.refs.layout.measure(function(e,n,r,a,i,o){t.updateLayout({nativeEvent:{layout:{width:r,height:a,x:i,y:o}}})})}},{key:"calculateDrawerIndex",value:function(){var e=this.drawerIndex,t=this.drawerPos.interpolate({inputRange:[0,this.drawerWidth],outputRange:[0,1]});e?(e._config=t._config,e._interpolation=t._interpolation):this.drawerIndex=t}},{key:"openDrawer",value:function(){if(this.props.collapsible&&!this.state.open){var e=this.refs.drawer;this.setState({open:!0}),e&&e.setVelocity({x:2e3})}}},{key:"closeDrawer",value:function(){if(this.props.collapsible&&this.state.open){var e=this.refs.drawer;this.setState({open:!1}),e&&e.setVelocity({x:-2e3})}}},{key:"onDrag",value:function(e){e.nativeEvent&&(e=e.nativeEvent),"start"===e.state?this.setState({open:!0}):"end"===e.state&&"closed"===e.targetSnapPointId&&this.setState({open:!1})}}]),t}(),styles$5=reactNative.StyleSheet.create({container:{flexDirection:"row"},collapsibleContainer:{position:"absolute",top:0,bottom:0,zIndex:2e3},drawer:{top:0,left:0,height:"100%",width:"100%",flex:1},collapsibleDrawer:{left:0,width:"100%",flex:1,position:"relative",zIndex:2e4,paddingRight:handleWidth},handle:{width:handleWidth,top:0,bottom:0,right:0,position:"absolute",zIndex:10},overlay:{backgroundColor:"black",height:"100%",width:"400%",position:"absolute"},expander:{position:"absolute",height:"100%",top:0,left:0,bottom:0}}),desktopTransition={styles:function(e,t){var n=e.screen?400:0;return{width:{inputRange:[-2,-1,0,1,2,3],outputRange:[0,0,t.width-n,400,0,0]},translateX:{inputRange:[-2,-1,0,1,2],outputRange:[t.width,t.width,n,0,0]}}},easing:reactNative.Easing.linear,duration:300},mobileTransition={styles:function(e,t){return{translateX:{inputRange:[-2,-1,0,1],outputRange:[t.width,t.width,0,0]},opacity:{inputRange:[-2,-1,0,.8,1],outputRange:[0,1,1,0,0]},scale:{inputRange:[-1,0,1,2],outputRange:[1,1,.5,.5]}}},duration:300,collapsibleDrawer:!0},stackAndDrawer={styles:{translateY:{inputRange:[0,1],outputRange:[-100,0]},opacity:{inputRange:[0,1],outputRange:[0,1]}},easing:reactNative.Easing.linear,duration:300},modalTransition={stack:stackAndDrawer,drawer:stackAndDrawer,modal:{styles:function(e,t){return{translateY:{inputRange:[0,1],outputRange:[t.height,0]}}},easing:reactNative.Easing.linear,duration:300}},isWeb$2="web"===reactNative.Platform.OS,router=createRouter(),Navigator=function(e){function t(e){var n;return _classCallCheck(this,t),_defineProperty(_assertThisInitialized(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))),"_endAnimation",function(){setTimeout(function(){n.setState({animating:!1},function(){n.forceUpdate()})},16)}),n.state={layout:n.getWindowSize()},n.calculateTransition(e.transitions,n.state.layout.width),n.getScreenStack=memoize(n.getScreenStack),n._onBack=n._onBack.bind(_assertThisInitialized(n)),n.drawer={open:function(){return n.drawerInstance.openDrawer()},close:function(){return n.drawerInstance.closeDrawer()}},reactNative.BackHandler.addEventListener("hardwareBackPress",n._onBack),n}return _inherits(t,React.Component),_createClass(t,[{key:"render",value:function(){var e=this,t=this.router;if(!t)return null;var n=this.props,r=n.DrawerComponent,a=(n.interceptor,n.routes,n.transitions,_objectWithoutProperties(n,["DrawerComponent","interceptor","routes","transitions"])),i=this.state,o=i.layout,s=i.indexes,c=this.currentTransition,u=this.currentBreakpoint,l=this.getModalTransitions(c),p=this.getScreenStack(t.stack,t.activeIndex),d=p.stack,h=p.index;return React__default.createElement(SharedElementWrapper,{router:t,layout:o},React__default.createElement(reactNative.View,{style:styles$6.windowWrapper},React__default.createElement(reactNative.View,{style:styles$6.container,onLayout:function(t){return e._onLayout(t.nativeEvent.layout)}},React__default.createElement(DrawerWrapper,{ref:function(t){return e.drawerInstance=t},router:t,transition:l.drawer,breakPoint:u,indexes:s.stack,collapsible:c.collapsibleDrawer,Drawer:r,navProps:a}),React__default.createElement(ScreenStack,{router:t,animating:this.state.animating,screenTransition:c,stackTransition:l.stack,stackIndexes:s.stack,breakPoint:u,stack:d,index:h,layout:o,drawer:this.drawer,navProps:a}),React__default.createElement(ModalWrapper,{router:t,animating:this.state.animating,stack:t.modal.stack,index:t.modal.stack,transition:l.modal,breakPoint:u,indexes:s.modal,layout:o,drawer:this.drawer,navProps:a}))))}},{key:"calculateTransition",value:function(e,t){for(var n=Object.keys(e).sort(function(e,t){return e-t}),r=n.length;r-- >0;)if(t>=parseInt(n[r]))return this.currentTransition=e[n[r]],void(this.currentBreakpoint=parseInt(n[r]));this.currentTransition=e[n[0]],this.currentBreakpoint=parseInt(n[0])}},{key:"getModalTransitions",value:function(e){return(e||this.currentTransition).modalTransition||modalTransition}},{key:"getScreenStack",value:function(e,t){var n=e.slice(),r=t;if(!n.length)return{stack:n,index:r};var a=e.length-1;return(n[a].Screen.urlstackOptions||{}).modal&&(n.pop(),r===a&&r--),{stack:n,index:r}}},{key:"startRouter",value:function(){var e=this;router.setStrategy(this.props.strategy),router.setRoutes(this.props.routes);var t=this.props.interceptor;t&&router.onBeforeChange(t),this.fu=function(){return e.forceUpdate()},router.onChange(this.fu),router.start(),this.router=router,this.showingModal=this.detectModal(),this.updateModalIndexes(this.showingModal)}},{key:"getWindowSize",value:function(){var e=reactNative.Dimensions.get("window");return{width:e.width,height:e.height,x:0,y:0}}},{key:"componentDidMount",value:function(){this.startRouter()}},{key:"componentWillUnmount",value:function(){this.fu=function(){},reactNative.BackHandler.removeEventListener("hardwareBackPress",this._onBack)}},{key:"componentDidUpdate",value:function(e){var t=this.detectModal();this.showingModal!==t&&(this.showingModal=t,this.updateModalIndexes(t)),e.transistions!==this.props.transistions&&this.calculateTransition(this.props.transitions,this.state.layout.width)}},{key:"_onLayout",value:function(e){this.calculateTransition(this.props.transitions,e.width),this.setState({layout:e})}},{key:"_onBack",value:function(){var e,t=this.router,n=t.stack;if(t.modal.active?e=t.modal.activeIndex?t.modal.stack[t.modal.activeIndex-1].path:(e=n[t.activeIndex].location).pathname+e.search:t.activeIndex&&(e=n[t.activeIndex-1].path),e)return t.navigate(e),!0}},{key:"detectModal",value:function(){return this.router.modal.active}},{key:"updateModalIndexes",value:function(e){var t=this,n={},r=this.state.indexes;if(r){var a=this.getModalTransitions();n={animating:!0},r={modal:{showing:!!e,transition:r.modal.transition},stack:{showing:!e,transition:r.stack.transition}},reactNative.Animated.timing(r.modal.transition,{toValue:e?1:0,easing:a.modal.easing,duration:a.modal.duration||300,useNativeDriver:!isWeb$2}).start(),reactNative.Animated.timing(r.stack.transition,{toValue:e?0:1,easing:a.stack.easing,duration:a.stack.duration||300,useNativeDriver:!isWeb$2}).start(function(){return t.setState(t._endAnimation)})}else r={modal:{showing:!!e,transition:new reactNative.Animated.Value(e?1:0)},stack:{showing:!e,transition:new reactNative.Animated.Value(e?0:1)}};n.indexes=r,this.setState(n)}}]),t}();_defineProperty(Navigator,"propTypes",{transitions:PropTypes.object,interceptor:PropTypes.func,strategy:PropTypes.string}),_defineProperty(Navigator,"defaultProps",{strategy:"hash",transitions:{0:mobileTransition,800:desktopTransition}});var statusBarHeight="android"===reactNative.Platform.OS?reactNative.StatusBar.currentHeight:0,styles$6=reactNative.StyleSheet.create({windowWrapper:{paddingTop:statusBarHeight,flex:1},container:{flex:1,flexDirection:"row",overflow:"hidden"}}),isWeb$3="web"===reactNative.Platform.OS,SharedElement=function(e){function t(e){var n;return _classCallCheck(this,t),n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e)),e.se.register(_assertThisInitialized(n),e),n}return _inherits(t,React.Component),_createClass(t,[{key:"render",value:function(){var e=this;return React__default.createElement(reactNative.View,{style:this.props.style,ref:"el",onLayout:function(){return e._onLayout()},pointerEvents:"auto"},this.props.children)}},{key:"componentWillUnmount",value:function(){this.props.se.unregister(this)}},{key:"measure",value:function(e){var t=this;if(this.box=!1,!isWeb$3&&!this.layouted)return setTimeout(function(){return t.measure(e)});this.refs.el&&this.refs.el.measure(function(n,r,a,i,o,s){t.box={width:a,height:i,x:o-e.x,y:s-e.y}})}},{key:"_onLayout",value:function(){this.layouted=!0}}]),t}();function ContextConsumerHOC(e){return function(t){return React__default.createElement(Context$1.Consumer,null,function(n){return React__default.createElement(Context.Consumer,null,function(r){return React__default.createElement(e,_extends({},t,{se:n,wrapper:r}))})})}}_defineProperty(SharedElement,"propTypes",{transition:PropTypes.oneOf([PropTypes.object,PropTypes.func]),transitionRender:PropTypes.func,transitionState:PropTypes.number,sharedId:PropTypes.string}),_defineProperty(SharedElement,"defaultTypes",{});var SharedElementWithContext=ContextConsumerHOC(SharedElement);exports.Navigator=Navigator,exports.SharedElement=SharedElementWithContext,exports.animatedStyles=animatedStyles,exports.router=router,exports.stagger=stagger;
//# sourceMappingURL=react-urlstack.js.map
