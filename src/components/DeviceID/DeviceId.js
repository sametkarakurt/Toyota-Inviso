import React, {useState, useEffect, useContext} from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import {Context} from '../../store/context';
import {useToast} from 'react-native-toast-notifications';
import {TouchableOpacity, Text} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import {useTranslation} from 'react-i18next';
const DeviceId = () => {
  const context = useContext(Context);
  const [showAlert, setShowAlert] = useState(true);
  const [showProgress, setShowProgess] = useState(true);
  const toast = useToast();
  const {t, i18n} = useTranslation();
  const handleButton = () => {
    setShowAlert(false);
  };
  useEffect(() => {
    setTimeout(handleButton, 3000);
  }, []);

  const hideAlert = () => {
    setShowAlert(false);
  };

  const copyItem = item => {
    Clipboard.setString(item);
    toast.show([t('copy')], {placement: 'bottom', duration: 2000});
  };
  return (
    <AwesomeAlert
      show={showAlert}
      showProgress={showProgress}
      title={t('license')}
      message={
        <TouchableOpacity onPress={() => copyItem(context.deviceID)}>
          <Text style={{fontSize: 20}}>{context.deviceID}</Text>
        </TouchableOpacity>
      }
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      contentContainerStyle={{width: 250}}
      messageStyle={{marginTop: 7.5}}
      titleStyle={{fontSize: 15, marginTop: 15}}
      overlayStyle={{height: '100%', width: '100%'}}
      confirmButtonColor="#DD6B55"
      onConfirmPressed={() => {
        hideAlert();
      }}
    />
  );
};

export default DeviceId;
