import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const DigitalSignatureImage = props => {
  return (
    <View>
      <Text>{props.uri}</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: props.uri,
        }}
      />
    </View>
  );
};

export default DigitalSignatureImage;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 335,
    height: 114,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
