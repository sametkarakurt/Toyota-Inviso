import 'react-native-gesture-handler';
import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  NativeBaseProvider,
  Radio,
  HStack,
  Heading,
  Box,
  VStack,
} from 'native-base';
import RadioGroup from 'react-native-radio-buttons-group';
import { background } from 'native-base/lib/typescript/theme/styled-system';

const DigitalSignatureImage = props => {

  return (
    <View>
        <Text>{props.uri}</Text>
      <Image
       style={styles.tinyLogo}
        source={{
          uri:props.uri

        }}
      />
        
    </View>

 
        
  )
  
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