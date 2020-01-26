import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reduxReset from 'redux-reset';
import rootReducer from './ducks';

let store;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['persist'],
};
const reducers = persistReducer(persistConfig, rootReducer);

function configStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const appliedMiddleware = __DEV__ ? applyMiddleware(thunk, logger) : applyMiddleware(thunk);
  store = initialState
    ? createStore(
      reducers,
      initialState,
      composeEnhancers(appliedMiddleware, reduxReset()),
    )
    : createStore(reducers, composeEnhancers(appliedMiddleware, reduxReset()));

  persistStore(store);

  return store;
}

const getStore = () => store;
export const getState = () => getStore() && getStore().getState();
export const dispatch = data => getStore() && getStore().dispatch(data);

export default configStore;
