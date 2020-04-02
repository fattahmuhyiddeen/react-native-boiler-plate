import React, { useEffect } from 'react';
import { TextInput, Keyboard } from 'react-native';
import 'react-native-gesture-handler';
import * as deviceAction from '@ducks/device';
import { AuthNav } from '@route';
import { navigationRef, isMountedRef } from '@route/NavigationService';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);


  onKeyboardAppear = e =>
    deviceAction.setDevice({
      isKeyboardAppear: true,
      keyboardHeight: e.endCoordinates.height,
    });

  onKeyboardHide = () =>
    deviceAction.setDevice({ isKeyboardAppear: false, keyboardHeight: 0 });


  useEffect(() => {
    Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      onKeyboardAppear
    );
    Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      onKeyboardHide
    );
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <AuthNav
        ref={instance => NavigationService.setTopLevelNavigator(instance)}
      />
    </NavigationContainer>
  )
}

export default App;