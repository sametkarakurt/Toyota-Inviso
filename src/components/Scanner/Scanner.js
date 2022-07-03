import React from 'react';
import {useNavigation} from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const ScanScreen = props => {
  const navigation = useNavigation();
  const onSuccess = e => {
    props.route.params.func(e.data);

    navigation.goBack();
  };
  return <QRCodeScanner onRead={onSuccess} />;
};

export default ScanScreen;
