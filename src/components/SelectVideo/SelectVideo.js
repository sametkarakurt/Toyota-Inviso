// Import React
import React, {useEffect, useContext} from 'react';
// Import core components

import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Context} from '../../store/context';

const SelectVideo = props => {
  const context = useContext(Context);

  const options = {
    mediaType: 'video',
    quality: context.photoResolution,
  };
  const navigation = useNavigation();
  useEffect(() => {
    const openGallery = async () => {
      const result = await launchImageLibrary(options);
      navigation.navigate('VideoDetail', {
        func: props.route.params.func,
        uri: result.assets[0].uri,
        type: 'select',
      });
    };
    openGallery();
  }, []);

  return null;
};

export default SelectVideo;
