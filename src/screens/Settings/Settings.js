import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {NativeBaseProvider, HStack, Switch} from 'native-base';
const SettingsScreen = ({route}) => {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <HStack alignItems="center" space={4}>
          <Text>Bluetooth</Text>
          <Switch size="sm" />
        </HStack>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default SettingsScreen;
