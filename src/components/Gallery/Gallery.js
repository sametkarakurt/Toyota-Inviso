 
// Import React
import React, { useState,useEffect } from 'react';
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
    title: `Select Image or Video\n(mixed)`,
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'mixed',
    },
  }
const Gallery = () => {




  const navigation = useNavigation(); 
  useEffect(() => {
     
  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    navigation.pop(2)

  }
    openGallery();

  }, []);

  return null;
};
 

 
export default Gallery;