 
// Import React
import React, { useState } from 'react';
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
 
 
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
 const options = {
    title: 'Take Video',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'video',
      durationLimit: 10,
      videoQuality: 'high'
    },

    
  }
const Video = () => {

 
  const takeVideo = async () => {
    const result = await launchCamera(options);
    console.log(result)
  }

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Button
          w="90%"
          onPress={() => {
            takeVideo();
          }}>
          Kamera
        </Button>
    </View>
  );
};
 

 
export default Video