import React, {useState} from 'react';

import {StyleSheet, View} from 'react-native';

import Signature from 'react-native-signature-canvas';
import {useNavigation} from '@react-navigation/native';
const DigitalSignature = props => {
  const [signature, setSign] = useState(null);
  const navigation = useNavigation();
  const handleSignature = signature => {
    props.route.params.func(signature);
    setSign(signature);
    navigation.goBack();
  };

  const handleEmpty = () => {};

  const style = `.m-signature-pad--footer
      .button {
        background-color: green;
        color: #FFF;
      }`;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30%',
      }}>
      <Signature
        descriptionText=""
        onOK={handleSignature}
        onEmpty={handleEmpty}
        clearText="Temizle"
        confirmText="Kaydet"
      />
    </View>
  );
};

export default DigitalSignature;

const styles = StyleSheet.create({
  preview: {
    height: 114,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    flex: 1,
  },
  previewText: {
    color: '#FFF',
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#69B2FF',
    width: 120,
    textAlign: 'center',
    marginTop: 10,
  },
});
