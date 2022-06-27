 
// Import React
import React, { useState,useEffect} from 'react';
// Import core components
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
  Button,
  Center,
} from 'native-base';
 
import { useNavigation } from '@react-navigation/native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
 const options = {
    title: 'Take Video',
    type: 'capture',
    options: {
      mediaType: 'video'
    },

    
  }
  
const Video = () => {

  const navigation = useNavigation(); 
  useEffect(() => {
    const takeVideo = async () => {
      const result = await launchCamera(options);
      console.log(result)
    }
    
    takeVideo();
   

  }, []);



  return null;
  
};
 

 
export default Video