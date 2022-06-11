 
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
    title: `Select Image or Video\n(mixed)`,
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'mixed',
    },
  }
const Gallery = () => {

 
  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    console.log(result)
  }

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Button
          w="90%"
          onPress={() => {
            openGallery();
          }}>
          Gallery
        </Button>
    </View>
  );
};
 

 
export default Gallery