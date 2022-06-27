import React, {useState, useEffect, useContext} from 'react';
import {Alert} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AwesomeAlert from 'react-native-awesome-alerts';
import {Context} from '../src/store/context';
const DeviceId = () => {
  const context = useContext(Context);
  const [showAlert, setShowAlert] = useState(true);

  const hideAlert = () => {
    setShowAlert(false);
  };
  return (
    <AwesomeAlert
      show={showAlert}
      showProgress={true}
      message={context.deviceID}
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showConfirmButton={true}
      confirmText="OK"
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
