import React from 'react';
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
const TakePhotoButton = () => {
    const navigation = useNavigation(); 
  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>

        <Button
                onPress={() => {
                  navigation.navigate('TakePhoto');
                }}>Fotoğraf Çek
          
             
                  
              
              </Button>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default TakePhotoButton;
