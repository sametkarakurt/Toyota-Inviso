import React, {useState, useContext} from 'react';
import {View, SafeAreaView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNetInfo} from '@react-native-community/netinfo';
import {Context} from '../../store/context';
import InternetConnection from '../../components/InternetAlert/InternetConnection';
import {Box, HStack, Text, NativeBaseProvider} from 'native-base';
import {useTranslation} from 'react-i18next';
const MissionsScreen = ({route}) => {
  const context = useContext(Context);
  const netInfo = useNetInfo();
  const {t, i18n} = useTranslation();
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Box marginTop={10} marginX={10}>
          {(JSON.stringify(netInfo.isConnected) === 'false' ||
            context.mod === true) && <InternetConnection />}
          <HStack>
            <FontAwesome color={'red'} name="exclamation" size={20} />
            <Text marginLeft={3}>{t('taskWarning')}</Text>
          </HStack>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default MissionsScreen;
