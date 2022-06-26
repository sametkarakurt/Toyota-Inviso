import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';

import {
  Stack,
  Alert,
  HStack,
  VStack,
  Text,
  Divider,
  Center,
  NativeBaseProvider,
} from 'native-base';

const InternetConnection = () => {
  return (
    <Center marginY={5}>
      <Stack space={3} w="90%">
        <>
          <Alert w="100%" variant={'solid'} colorScheme="error" status="error">
            <VStack space={2} flexShrink={1} w="100%">
              <HStack
                flexShrink={1}
                space={2}
                alignItems="center"
                justifyContent="space-between">
                <HStack space={2} flexShrink={1} alignItems="center">
                  <Alert.Icon />
                  <Text color={'warmGray.50'}>İnternet Bağlantısı Yok!</Text>
                </HStack>
              </HStack>
            </VStack>
          </Alert>
        </>
      </Stack>
    </Center>
  );
};

export default InternetConnection;
