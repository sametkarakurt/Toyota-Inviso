import React, { useState ,useEffect} from 'react';
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
  View
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import ImageDetail from '../ImageDetail/ImageDetail';
import { ScrollView } from 'react-native-gesture-handler';
const TakePhotoButton = (props) => {
    const navigation = useNavigation(); 
    const [imageArray,setImageArray] = useState();
    useEffect(() => {
    
      if(props.formData.takePhoto) {
        setImageArray(props.formData.takePhoto)
      }

  
        
  
    }, []);
    
  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>

        <Button
        colorScheme="teal"
                onPress={() => {
                  navigation.navigate('TakePhoto',{func:props.valueChange,setUri:props.setUri});
                }}>Fotoğraf Çek
          
             
                  
        
              </Button>

    
    <ScrollView horizontal={true}>
         {props.formData.takePhoto && props.formData.takePhoto.map((item) => {
             return    <ImageDetail key={item} uri={item} removeItem={props.valueChange} data={props.formData} />
        })}

              
</ScrollView>


     
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default TakePhotoButton;
