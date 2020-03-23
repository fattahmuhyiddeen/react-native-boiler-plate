// import { NavigationActions } from 'react-navigation';

// let _navigator;

// export const setTopLevelNavigator = navigatorRef => _navigator = navigatorRef;

// export const navigate = (routeName, params) =>
//   _navigator.dispatch(NavigationActions.navigate({ routeName, params }));

// export const goBack = () =>
//   _navigator.dispatch(NavigationActions.back());

import { createRef } from 'react';

export const isMountedRef = createRef();

export const navigationRef = createRef();

export const navigate = (name, params) => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export const back = () => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.back();
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}