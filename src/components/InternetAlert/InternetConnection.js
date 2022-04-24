import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {useNetInfo} from '@react-native-community/netinfo';
const InternetConnection = ({route}) => {
  const netInfo = useNetInfo();
  return (
    <View>
      <Text>{JSON.stringify(netInfo.isConnected)}</Text>
    </View>
  );
};

export default InternetConnection;
