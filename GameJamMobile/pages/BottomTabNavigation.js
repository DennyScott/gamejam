import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Register from './Register';
import Home from './Home';
import { Icon } from 'react-native-elements';

const HomeTabIcon = (
  <Icon name='home' />
);

const CameraIcon = (
  <Icon name='camera-alt' />
)

export default BottomTabNavigator = createBottomTabNavigator(
  {
    Messages: {
      screen: Home,
      navigationOptions: {
        header: null,
        tabBarIcon: HomeTabIcon,
      }
    },

    Camera: {
      screen: Register,
      navigationOptions: {
        header: null,
        tabBarIcon: CameraIcon,
      }
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
    }
  },
)