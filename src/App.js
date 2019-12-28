import React from 'react';
import { TextInput, Keyboard } from 'react-native';
import 'react-native-gesture-handler';
import * as deviceAction from 'ducks/device';
import Route from 'route';
import NavigationService from 'route/NavigationService';

class App extends React.PureComponent {
  componentDidMount() {
    //setting for keyboard event
    Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      this.onKeyboardAppear
    );
    Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      this.onKeyboardHide
    );
    // end setting for keyboard event
  }
  onKeyboardAppear = e =>
    deviceAction.setKeyboard({
      isKeyboardAppear: true,
      keyboardHeight: e.endCoordinates.height,
    });

  onKeyboardHide = () =>
    deviceAction.setKeyboard({ isKeyboardAppear: false, keyboardHeight: 0 });

  render() {
    return null;
  }
}

export default App;