import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const config = {
  headerMode: 'none'
};

const AuthNavigator = createStackNavigator(
  {
    Home: { screen: () => null },
  },
  config
);

const NonAuthNavigator = createStackNavigator(
  {
    Login: { screen: () => null },
  },
  config
);

const AppNavigator = createSwitchNavigator(
  {
    NonAuthNavigator,
    AuthNavigator,
  },
  {
    initialRouteName: 'AuthNavigator',
  }
)

export default createAppContainer(AppNavigator);
