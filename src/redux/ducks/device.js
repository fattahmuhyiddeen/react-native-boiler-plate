import { dispatch } from '@redux';
import SplashScreen from "react-native-splash-screen";
const NAMESPACE = 'device';

export const SET_DEVICE = `${NAMESPACE}/SET_DEVICE`;

export const setDevice = data => dispatch({
  type: SET_DEVICE,
  data,
});
const initialState = {
  isKeyboardAppear: false,
  keyboardHeight: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "persist/REHYDRATE":
      SplashScreen.hide();
      return state;
    case SET_DEVICE:
      return { ...state, ...action.data }
    default:
      return state;
  }
}
