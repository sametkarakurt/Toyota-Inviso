import React from 'react';
import {
  HStack,
  Box,
  NativeBaseProvider,
  Input,
  Button,
  View,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
const ScannerButton = props => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <HStack w="100%" justifyContent={'space-between'}>
          <View pointerEvents="none">
            <Input
              backgroundColor={'white'}
              value={props.formData.scannerComponent}
              h="10"
              w="1000%"
            />
          </View>

          <Button
            w="25%"
            colorScheme="warning"
            onPress={() => {
              navigation.navigate('Scanner', {func: props.valueChange});
            }}>
            Scan
          </Button>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default ScannerButton;
