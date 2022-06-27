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
  Button,
  Box,
  VStack,
} from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';

const ImageDetail = props => {
  const [value, setValue] = useState();
  
  useEffect(() => {

  }, []);



  const removePhoto = () => {

    props.removeItem(props.uri,"remove")
  }

  return (
    <HStack width={50} justifyContent={'space-between'} marginRight={16} flex={1}>
         <Image
       style={styles.tinyLogo}
        source={{
          uri:props.uri

        }}
      />
             <TouchableOpacity style={{ color: "white" ,alignItems:'flex-start',justifyContent:'flex-start',marginLeft:-25}} onPress={removePhoto}>
             <Ionicons name="close-circle" size={20} />
        </TouchableOpacity>

    </HStack>


   


       

        
  )
  
};

export default ImageDetail;

const styles = StyleSheet.create({

    tinyLogo: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginRight: 3
    },
  });