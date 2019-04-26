# react-urlstack

A responsive navigator for react-native based on URLs.

# Installation
```
npm install --save react-urlstack
```

# Usage
In your root component
```js
import React from 'react'
import {Navigator} from 'react-urlstack'
import routes from './routes'

export default function App(){
  return <Navigator routes={ routes } />
}
```

The routes are defined like:
```js
// routes.js
export default [

  // Simple screen
  { path: '/', component: WelcomeScreen },

  { // Nested navigation
    path: '/people',
    componenent: PeopleListScreen,
    children: [
      { path: '/:id', component: PersonDetail }
    ]
  },

  { // Tabs
    path: '/tabs',
    component: TabContainerScreen,
    isTabs: true,
    children: [
      { path: '/tab1', component: Tab1Screen },
		  { path: '/tab2', component: Tab2Screen },
    ]
  },

  // Modal
  { path: '/modal', component: Modal, isModal: true },

  // Default route
  { path: '/*', cb: Screen404 }
]
```

To know more about the route definition [see urlstack docs](https://github.com/arqex/url-navigation/tree/master/packages/urlstack).

# API

**Navigator**
Top level wrapper that will react to the URL changes showing the proper screen.
```js
import {Navigator} from 'react-urlstack';

//...

<Navigator

  // The route definition seen above
  routes={ routeDefinition }

  // Route interception as seen at https://github.com/arqex/url-navigation/tree/master/packages/urlhub#intercepting-route-changes
  interceptor={ location => location.pathname === '/foo' ? '/bar' : location }

  // If given, there will be a collapsible drawer showing the given component
  DrawerComponent={ SideMenu }

  // Transition functions (see the screen transitions section)
  // We can create breakpoints to define differnt transitions
  // for different horizontal screen resolutions
  // the currentBreakPoint will be passed to the pages and the
  // transitions
  transitions={{
    0: mobileTransition,
    800: desktopTransition
  }}
/>
```

**SharedElement**
Two different pages can share elements that will remain on the screen when navigating from one to another. 
We can animate those elements to create beautiful transitions when navigating.

Two screen share an element when they both define a `<SharedElement>` with the same `sharedId`, the are called **sibling elements**.

By default in a transition, the `SharedElement` will be translated and scaled from its position/size in the origin screen to the position/size in the target screen, but that animation can be customized.

```js
import {SharedElement} from 'react-urlstack'
import {Image} from 'react-native'

// SharedElement need to be rendered in both pages
<SharedElement

  // The elements that will remain on the screen need to have the same
  // `sharedId` (siblings) in both pages. Other `SharedElement`s that don't have
  // a brother with the same `sharedId` in the page that enters will go
  // away with the page that leaves
  sharedId="avatar"

  // The transition uses an AnimatedValue
  // https://facebook.github.io/react-native/docs/animated
  // that is passed to the transition function in order to animate the element
  // The value will go from the `transitionState` prop of the `SharedElement`
  // that leaves to the `transitionState` of the one that enters.
  // We can use those values to create nice interpolations
  transitionState={ 0 }

  // The transition function, it receives an object with
  // {
  //   breakPoint, the current screen width breakpoint
  //   entering {props, box {x,y,width,height} },
  //   leaving {props, box {x,y,width,height} },
  //   defaultTransition, the transition declaration by default
  // }
  // 
  // It needs to return an object with a transition declaration,
  // that contains a style and the attributes to animate in the form
  // of an interpolation declaration
  // see https://github.com/arqex/url-navigation/blob/master/packages/react-urlstack-playground/src/screens/transitionExamples/checks/checkTransition.js
  transition={ niceTransition }

  // Accept some styles
  style={ elementStyles } />
  <Image source={ imageFile } />
</SharedElement>

```

**stagger**
A helper to build apply the same animation in different elements but starting with some delay between elements.

The staging is not based in time, but in an `AnimatedValue`, so we can apply the effect to the screen transitions.

```js
import {stagger} from 'react-urlstack';

// It receives an animatedValue
// The value delay
// The number of elements to animate
// the interpolation definition
let buttonStages = stagger( animatedValue, .1, 2, {
  translateY: {
    inputRange: [ -1, -.3, -.1, 0 ],
    outputRange: [ 100, 100, 0, 0 ]
  }
})

// Then the output of the stagger method can be used directly in the styles of
// animated elements

// this animation starts when animatedValue is -.4
// and finishes when is -.1
<Animated.View style={ buttonStages[0] }>
  <Button />
</Animated.View>

// this animation starts when animatedValue is -.3
// and finishes when is 0
<Animated.View style={ buttonStages[1] }>
  <Button />
</Animated.View>
```





