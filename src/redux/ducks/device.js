import { dispatch } from '@redux';
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
    case SET_DEVICE:
      return { ...state, ...action.data }
    default:
      return state;
  }
}
