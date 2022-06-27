import React,{useEffect} from 'react';
import {
  Checkbox,
  Heading,
  HStack,
  VStack,
  Text,
  Box,
  Center,
  NativeBaseProvider,
  Input,
  Button,
  TouchableOpacity,
  View,
  ScrollView
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import ImageCommentDetail from '../ImageCommentDetail/ImageCommentDetail';
const TakePhotoCommentButton = (props) => {
  useEffect(() => {

  }, []);
  
  
    const navigation = useNavigation(); 
  return (
    <NativeBaseProvider>
  
      <Box marginBottom={5}>
        <VStack space={2}>

        <Button
                onPress={() => {
                  navigation.navigate('TakePhoto',{formData:props.formData,func:props.valueChange,type:'comment'});
                }}>Fotoğraf ve Yorum
          
             
                  
              
              </Button>

                 
    <ScrollView horizontal={true}>
         {props.formData.takePhotoCommentComponent && props.formData.takePhotoCommentComponent.map((item) => {
             return    <ImageCommentDetail key={item} value={item} removeItem={props.valueChange} data={props.formData} />
        })}

              
</ScrollView>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default TakePhotoCommentButton;
