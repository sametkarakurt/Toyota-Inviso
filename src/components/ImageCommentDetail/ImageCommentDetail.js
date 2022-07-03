import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {HStack, TextArea, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ImageCommentDetail = props => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  const removePhoto = () => {
    props.removeItem(props.value, 'remove');
  };

  return (
    <HStack
      width={50}
      justifyContent={'space-between'}
      marginRight={16}
      flex={1}>
      <VStack>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: props.value.uri,
          }}
        />

        <TextArea showSoftInputOnFocus={false}>{props.value.comment}</TextArea>
      </VStack>

      <TouchableOpacity
        style={{
          color: 'white',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          marginLeft: -25,
        }}
        onPress={removePhoto}>
        <Ionicons name="close-circle" size={20} />
      </TouchableOpacity>
    </HStack>
  );
};

export default ImageCommentDetail;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 3,
  },
});
