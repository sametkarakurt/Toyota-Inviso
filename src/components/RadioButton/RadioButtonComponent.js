import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import {
  NativeBaseProvider,
  Radio,
  HStack,
  Heading,
  Box,
  VStack,
} from 'native-base';
const RadioButtonComponent = () => {
  const [value, setValue] = React.useState('one');
  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>
          <HStack alignItems="baseline">
            <Heading fontSize="lg">RadioButton</Heading>
          </HStack>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={value}
            onChange={nextValue => {
              setValue(nextValue);
            }}>
            <Radio value="one" my={1}>
              Bay
            </Radio>
            <Radio value="two" my={1}>
              Bayan
            </Radio>
          </Radio.Group>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default RadioButtonComponent;
