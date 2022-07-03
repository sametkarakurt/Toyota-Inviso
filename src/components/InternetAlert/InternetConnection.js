import React from 'react';

import {Stack, Alert, HStack, VStack, Text, Center} from 'native-base';
import {useTranslation} from 'react-i18next';
const InternetConnection = () => {
  const {t, i18n} = useTranslation();
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
                  <Text color={'warmGray.50'}>{t('internet')}</Text>
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
