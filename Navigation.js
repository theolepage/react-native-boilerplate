import React from 'react'
import { Image } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import Welcome from './screens/Welcome'
import Login from './screens/Login'
import Browse from './screens/Browse'
import Profile from './screens/Profile'

import { theme } from './constants'

const AppNavigator = createStackNavigator({
    Welcome,
    Login,
    Browse,
    Profile
},
{
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: theme.colors.white,
          borderBottomColor: 'transparent',
          elevation: 0,
          marginTop: 30,
          marginLeft: 15
        },
        headerBackImage: <Image source={require('./assets/icons/back.png')} />,
        headerTitleStyle: {
            fontSize: 26,
            fontWeight: "bold",
            color: '#1e1e1e'
        },
        headerLeftContainerStyle: {
            marginLeft: 30,
        },
        headerRightContainerStyle: {
            marginRight: 30,
        },
    }
})
  
export default createAppContainer(AppNavigator)