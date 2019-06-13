import React from 'react'
import { Image } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import Welcome from './screens/Welcome'
import Login from './screens/Login'
import Browse from './screens/Browse'

import { theme } from './constants'

const AppNavigator = createStackNavigator({
    Welcome,
    Login,
    Browse
},
{
    defaultNavigationOptions: {
        headerStyle: {
          height: theme.sizes.base * 3,
          backgroundColor: theme.colors.white,
          borderBottomColor: "transparent",
          elevation: 0,
        },
        headerBackImage: <Image source={require('./assets/icons/back.png')} />,
        headerBackTitle: null,
        headerLeftContainerStyle: {
          alignItems: 'center',
          marginLeft: 15,
          paddingRight: 0,
        },
        headerRightContainerStyle: {
          alignItems: 'center',
          paddingRight: theme.sizes.base,
        },
    }
})
  
export default createAppContainer(AppNavigator)