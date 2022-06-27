import {useState, useEffect, useContext} from 'react';
import {Alert} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Context} from '../src/store/context';
const DeviceId = () => {
  const context = useContext(Context);
  useEffect(() => {
    showUniqueId();
  }, []);

  const showUniqueId = () => {
    Alert.alert(context.deviceID);
  };
  return null;
};

export default DeviceId;
