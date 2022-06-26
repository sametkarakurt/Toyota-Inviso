import React, {useEffect, useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {HomeScreen} from '../screens/Home/HomeScreen';
import FormScreen from '../screens/Form/FormScreen';
import SettingsScreen from '../screens/Settings/Settings';
import OfflineScreen from '../screens/Offline/OfflineScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator barStyle={{backgroundColor: 'black'}}>
      <Tab.Screen
        name={'Formlar'}
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
        name={'Görevlerim'}
        component={FormScreen}
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
        name={'Çevrimdışı'}
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
        name={'Ayarlar'}
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
