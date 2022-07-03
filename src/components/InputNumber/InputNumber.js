import React, {useEffect, useState} from 'react';
import {
  Heading,
  HStack,
  VStack,
  Box,
  NativeBaseProvider,
  Input,
} from 'native-base';
const InputNumber = props => {
  const [formValue, setFormValue] = useState();

  useEffect(() => {
    if (props.formData.numberComponent) {
      setFormValue(props.formData.numberComponent);
    }
  }, []);

  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>
          <HStack alignItems="baseline">
            <Heading fontSize="lg">Input Number</Heading>
          </HStack>
          <Input
            h="9"
            backgroundColor={'white'}
            value={formValue}
            placeholder={props.options[0].value}
            key={props.key}
            onChangeText={text => {
              setFormValue(text);
              props.valueChange(text);
            }}
          />
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default InputNumber;
