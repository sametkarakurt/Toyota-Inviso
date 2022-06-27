import React, { useState,useEffect } from 'react';
import {
  TextArea,
  HStack,
  Heading,
  Box,
  Center,
  VStack,
  NativeBaseProvider,
} from 'native-base';
import {Text, View} from 'react-native';
const TextAreaComponent = props => {
  const [formValue,setFormValue] = useState()

  useEffect(() => {
   
    if(props.formData.textAreaComponent){
      setFormValue(props.formData.textAreaComponent)
    }


  }, []);
  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={3}>
          <HStack alignItems="baseline">
            <Heading fontSize="lg">Text Area</Heading>
          </HStack>
          <TextArea
            placeholder={props.options[0].key}
            w="100%"
            value={formValue}
            onChangeText={text => {
              setFormValue(text);
              props.valueChange(text)
            }}
          />
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default TextAreaComponent;
