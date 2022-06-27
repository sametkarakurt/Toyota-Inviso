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
} from 'native-base';
const InputNumber = props => {
  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>
          <HStack alignItems="baseline">
            <Heading fontSize="lg">Input Number</Heading>
          </HStack>
          <Input key={props.key} onChangeText={text => props.valueChange(text)} />
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default InputNumber;
