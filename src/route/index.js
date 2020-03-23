import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@screens/home';

const Stack = createStackNavigator();

export const AuthNav = () => (
  <Stack.Navigator>
    <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
  </Stack.Navigator>
)
