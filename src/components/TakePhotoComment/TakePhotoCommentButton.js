import React, {useEffect} from 'react';
import {VStack, Box, NativeBaseProvider, Button, ScrollView} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import ImageCommentDetail from '../ImageCommentDetail/ImageCommentDetail';
const TakePhotoCommentButton = props => {
  useEffect(() => {}, []);

  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>
          <Button
            onPress={() => {
              navigation.navigate('TakePhoto', {
                formData: props.formData,
                func: props.valueChange,
                type: 'comment',
              });
            }}>
            Fotoğraf ve Yorum
          </Button>

          <ScrollView horizontal={true}>
            {props.formData.takePhotoCommentComponent &&
              props.formData.takePhotoCommentComponent.map((item, index) => {
                return (
                  <ImageCommentDetail
                    key={index}
                    value={item}
                    removeItem={props.valueChange}
                    data={props.formData}
                  />
                );
              })}
          </ScrollView>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default TakePhotoCommentButton;
