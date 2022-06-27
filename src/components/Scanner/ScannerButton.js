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
const ScannerButton = () => {
    const navigation = useNavigation(); 
  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>
        <View  pointerEvents="none">
          <Input />
        </View>

        <Button
       colorScheme="yellow"
                onPress={() => {
                  navigation.navigate('Scanner');
                }}>Scan
          
             
                  
              
              </Button>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default ScannerButton;
