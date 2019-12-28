import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const config = {
  headerMode: 'none'
};

const AppNavigator = createStackNavigator(
  {
    Home: { screen: () => null },
  },
  config
);

export default createAppContainer(AppNavigator);
