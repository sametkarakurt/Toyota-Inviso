import React, {useState, useEffect, useContext} from 'react';
import {Alert} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AwesomeAlert from 'react-native-awesome-alerts';
import {Context} from '../src/store/context';
import Entypo from 'react-native-vector-icons/Entypo';
const DeviceId = () => {
  const context = useContext(Context);
  const [showAlert, setShowAlert] = useState(true);
  const [showProgress, setShowProgess] = useState(true);

  const handleButton = () => {
    setShowAlert(false);
  };
  useEffect(() => {
    setTimeout(handleButton, 3000);
  }, []);

  const hideAlert = () => {
    setShowAlert(false);
  };
  return (
    <AwesomeAlert
      show={showAlert}
      showProgress={showProgress}
      message={context.deviceID}
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      contentContainerStyle={{width: 250}}
      messageStyle={{fontSize: 20, marginTop: 15}}
      confirmButtonColor="#DD6B55"
      onConfirmPressed={() => {
        hideAlert();
      }}
    />
  );
};

export default DeviceId;
