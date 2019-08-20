import React from 'react';
import { createStackNavigator } from 'react-navigation';

import BottomTabNavigation from './pages/BottomTabNavigation';

const RootStack = createStackNavigator({
  Home: BottomTabNavigation,
});

function App() {
  return <RootStack />
}

export default App;