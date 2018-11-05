import React from 'react';
import { createStackNavigator } from 'react-navigation';

import BottomTabNavigation from './pages/BottomTabNavigation';

const RootStack = createStackNavigator({
  Home: BottomTabNavigation,
});


export default class App extends React.Component {
  render() {
    return < RootStack />
  }
}
