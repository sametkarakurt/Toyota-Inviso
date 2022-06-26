import React from 'react';
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
const TextAreaComponent = () => {
  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={3}>
          <HStack alignItems="baseline">
            <Heading fontSize="lg">Text Area</Heading>
          </HStack>
          <TextArea placeholder="Text Area Placeholder" w="100%" align />
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default TextAreaComponent;
