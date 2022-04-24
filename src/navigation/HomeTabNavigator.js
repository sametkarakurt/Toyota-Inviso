import React, {useEffect, useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import HomeScreen from '../screens/Home/HomeScreen';
import SettingsScreen from '../screens/Settings/Settings';
import FormScreen from '../screens/Form/FormScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/Login/LoginScreen';
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'Forms'} component={FormScreen} />
      <Tab.Screen name={'Settings'} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
