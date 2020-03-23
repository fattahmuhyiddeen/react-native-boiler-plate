import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// const config = {
//   headerMode: 'none'
// };
export const AuthNav = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={() => null} />
  </Stack.Navigator>
)

// export default createAppContainer(AppNavigator);
