import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/views/HomePage';
import Inscription from './src/views/Inscription';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Inscription" component={Inscription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
