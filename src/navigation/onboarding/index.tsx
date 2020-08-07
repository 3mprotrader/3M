import * as React from 'react';
import {ROUTES} from '../../util/routes';
import {Splash} from '../../screens/splash';
// import {Registration} from "../../screens/registration";
import {OnboardingStackParamList, OnboardingStackProps} from '../types';
import {createStackNavigator} from '@react-navigation/stack';

const OnboardingStackNavigator = createStackNavigator<
  OnboardingStackParamList
>();

export const OnboardingStack: React.FC<OnboardingStackProps> = () => {
  return (
    <OnboardingStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <OnboardingStackNavigator.Screen
        name={ROUTES.Splash}
        component={Splash}
      />
    </OnboardingStackNavigator.Navigator>
  );
};