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
const InputNumber = () => {
  const [groupValue, setGroupValue] = React.useState(['Öğrenci', 'Çalışan']);
  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>
          <HStack alignItems="baseline">
            <Heading fontSize="lg">Input Number</Heading>
          </HStack>

          <Input />
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default InputNumber;
