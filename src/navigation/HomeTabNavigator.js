import React, {useEffect, useState} from 'react';
import {HomeScreen} from '../screens/Home/HomeScreen';
import SettingsScreen from '../screens/Settings/Settings';
import MissionsScreen from '../screens/Missions/MissionsScreen'
import OfflineScreen from '../screens/Offline/OfflineScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';
const Tab = createMaterialBottomTabNavigator();

const HomeTabNavigator = () => {
  const {t, i18n} = useTranslation();
  return (
    <Tab.Navigator barStyle={{backgroundColor: 'black'}}>
      <Tab.Screen
        name={t('homePage')}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="clipboard-text"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name={t('missions')}
        component={MissionsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="square-edit-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name={t('offlinePage')}
        component={OfflineScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="tray-arrow-down"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name={t('settings')}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
