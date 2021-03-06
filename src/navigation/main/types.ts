import { StackNavigationProp } from '@react-navigation/stack';
import { ROUTES } from '../../util/routes';
import { RouteProp } from '@react-navigation/native';

export type TabParamList = {
  Home: undefined;
  Trade: undefined;
  Me: undefined;
  ThinkTank: undefined;
  SettingScreen: undefined;


};

/*
 * Configure navigation prop for the application's main screens
 */
export type MainStackNavigationProp = StackNavigationProp<
  TabParamList,
  ROUTES.Trade
>;

/*
 * Configure route prop for the application's main screens
 */
export type MainStackRouteProp = RouteProp<TabParamList, ROUTES.Trade>;

export type MainStackProps = {
  navigation: MainStackNavigationProp;
  route: MainStackRouteProp;
};
