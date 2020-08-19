import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from '../../util/routes';
import {TabParamList} from './types';
import {HomeStack} from '../home';

const Tab = createBottomTabNavigator<TabParamList>();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTES.Home} component={HomeStack} />
    </Tab.Navigator>
  );
}