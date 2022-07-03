// Import React
import React, {useEffect, useContext} from 'react';
// Import core components

import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {Context} from '../../store/context';
const Photo = props => {
  const context = useContext(Context);
  const options = {
    type: 'capture',
    options: {
      mediaType: 'photo',
      saveToPhotos: true,
      quality: context.cameraResolution,
    },
  };
  const navigation = useNavigation();
  useEffect(() => {
    const takePhoto = async () => {
      const result = await launchCamera(options);

      if (props.route.params.type) {
        navigation.navigate('TakePhotoComment', {
          uri: result.assets[0].uri,
          func: props.route.params.func,
        });
      } else {
        if (props.route.params.func != 'photoCommentChange') {
          props.route.params.func(result.assets[0].uri, 'add');
        }

        navigation.pop(2);
      }
    };

    takePhoto();
  }, []);

  return null;
};

export default Photo;
