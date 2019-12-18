import React from 'react'
import {StyleSheet, View, Platform} from 'react-native'
import {Navigator, router} from 'react-urlstack'
import routes from './routes'
import SideMenu from './components/menu/SideMenu'

if( Platform.OS === 'web' ){
  require('./utils/loadIconFont')
}

window.router = router;

export default function StackApp(props){
  return (
    <View style={ styles.container }>
      <Navigator routes={ routes }
        interceptor={ l => l.pathname === '/foo' ? '/tabs' : l }
        DrawerComponent={ SideMenu }
        foo="bar"
        transitionTime={ 1000 } /> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 1,
    backgroundColor: '#eee'
  }
})
