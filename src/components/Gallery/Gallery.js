import React, {useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Context} from '../../store/context';

const Gallery = props => {
  const context = useContext(Context);
  const options = {
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'photo',
      quality: context.photoResolution,
    },
  };

  const navigation = useNavigation();
  useEffect(() => {
    const openGallery = async () => {
      const result = await launchImageLibrary(options);

      if (props.route.params.type) {
        navigation.navigate('TakePhotoComment', {
          uri: result.assets[0].uri,
          func: props.route.params.func,
        });
      } else {
        if (props.route.params.func) {
          props.route.params.func(result.assets[0].uri, 'add');
        }
        navigation.pop(2);
      }
    };
    openGallery();
  }, []);

  return null;
};

export default Gallery;
