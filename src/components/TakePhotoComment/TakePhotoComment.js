import React from 'react';
import {
  Checkbox,
  Heading,
  HStack,
  VStack,
  Text,
  Box,
  Center,
  NativeBaseProvider,
  Input,
  Button,
  TouchableOpacity,
  View
} from 'native-base';
import TakePhoto from '../TakePhoto/TakePhoto';
import { useNavigation } from '@react-navigation/native';
const TakePhotoComment = () => {
    const navigation = useNavigation(); 
  return (

       

        <TakePhoto />
       
  

  );
};

export default TakePhotoComment;
