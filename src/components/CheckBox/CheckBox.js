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
} from 'native-base';
const CheckBox = props => {
  const [groupValue, setGroupValue] = React.useState([]);
  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>
          <HStack alignItems="baseline">
            <Heading fontSize="lg">CheckBox</Heading>
          </HStack>

          <Checkbox.Group
            colorScheme="green"
            defaultValue={groupValue}
            accessibilityLabel="pick an item"
            onChange={values => {
              setGroupValue(values || []);
              props.valueChange(values);
            }}>
            <Checkbox value="ogrenci" my="1">
              Öğrenci
            </Checkbox>
            <Checkbox value="calisan" my="1">
              Çalışan
            </Checkbox>
          </Checkbox.Group>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default CheckBox;
