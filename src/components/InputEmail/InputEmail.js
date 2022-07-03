import React, {useState, useEffect} from 'react';
import {
  Heading,
  HStack,
  VStack,
  Box,
  NativeBaseProvider,
  Input,
} from 'native-base';
const InputEmail = props => {
  const [formValue, setFormValue] = useState();
  useEffect(() => {
    if (props.formData.emailComponent) {
      setFormValue(props.formData.emailComponent);
    }
  }, []);

  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>
          <HStack alignItems="baseline">
            <Heading fontSize="lg">Input Email</Heading>
          </HStack>

          <Input
            h="9"
            autoCapitalize="none"
            backgroundColor={'white'}
            value={formValue}
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

export default InputEmail;
