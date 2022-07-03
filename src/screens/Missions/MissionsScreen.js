import React, {useState, useContext} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
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
      <SafeAreaView style={styles.container}>
        <Box>
          {(JSON.stringify(netInfo.isConnected) === 'false' ||
            context.mod === true) && <InternetConnection />}
          <HStack
            marginTop={
              JSON.stringify(netInfo.isConnected) === 'false' ||
              context.mod === true
                ? 3
                : 10
            }
            marginLeft={5}>
            <FontAwesome color={'red'} name="exclamation" size={20} />
            <Text marginLeft={3}>{t('taskWarning')}</Text>
          </HStack>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default MissionsScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8EAED',
    flex: 1,
  },
});
