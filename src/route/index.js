import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AuthNav = () => (
  <Stack.Navigator>
    <Stack.Screen options={{ headerShown: false }} name="Home" component={() => null} />
  </Stack.Navigator>
)
