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
const TakeVideoButton = (props) => {
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
        colorScheme="red"
                onPress={() => {
                  navigation.navigate('TakeVideo',{func:props.valueChange,setUri:props.setUri});
                }}>Video Çek
          
             
                  
        
              </Button>

  



     
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default TakeVideoButton;
