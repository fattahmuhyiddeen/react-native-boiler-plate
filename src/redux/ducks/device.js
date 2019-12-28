import { dispatch } from 'root-of-redux';
const NAMESPACE = 'device';

export const SET_KEYBOARD = `${NAMESPACE}/SET_KEYBOARD`;

export const setKeyboard = data => dispatch({
  type: SET_KEYBOARD,
  data,
});
const initialState = {
  isKeyboardAppear: false,
  keyboardHeight: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_KEYBOARD:
      return { ...state, ...action.data }
    default:
      return state;
  }
}
