import React from 'react';
import {
  Button,
  Divider,
  Heading,
  VStack,
  Stack,
  ScrollView,
  Center,
  HStack,
  NativeBaseProvider,
} from 'native-base';

const SubmitButons = () => {
  return (
    <NativeBaseProvider>
      <HStack w="100%" justifyContent={'space-between'}>
        <Button w="50%" colorScheme="green">
          GÖNDER
        </Button>
        <Button w="50%" colorScheme="yellow">
          KAYDET
        </Button>
      </HStack>
    </NativeBaseProvider>
  );
};

export default SubmitButons;
