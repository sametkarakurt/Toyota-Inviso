import React, {useState, useEffect, useContext} from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './styles';
import {
  NativeBaseProvider,
  HStack,
  Switch,
  Divider,
  Text,
  VStack,
  Heading,
  Box,
} from 'native-base';
import Clipboard from '@react-native-community/clipboard';
import {useToast} from 'react-native-toast-notifications';
import {AuthContext} from '../utily';
import InternetConnection from '../../components/InternetAlert/InternetConnection';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import {Context} from '../../store/context';
import {useNetInfo} from '@react-native-community/netinfo';
import {useTranslation} from 'react-i18next';

const SettingsScreen = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const {signOut} = React.useContext(AuthContext);
  const context = useContext(Context);
  const toast = useToast();
  const netInfo = useNetInfo();
  function toggle() {
    context.toggleOfflineMod();
  }

  const exit = () => {
    signOut();
  };

  const copyItem = item => {
    Clipboard.setString(item);
    toast.show([t('copy')], {placement: 'center', duration: 750});
  };
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Box>
          {(JSON.stringify(netInfo.isConnected) === 'false' ||
            context.mod === true) && <InternetConnection />}
          <VStack
            marginTop={
              (context.mod === true || JSON.stringify(netInfo.isConnected)) ===
              'true'
                ? 5
                : 0
            }
            paddingX={5}>
            <Heading size="2xl">{t('settings')}</Heading>
            <Heading
              marginBottom={4}
              marginTop={4}
              style={styles.item}
              size="sm">
              {t('welcome')} {context.username}
            </Heading>
            <HStack
              style={styles.item}
              alignItems="center"
              justifyContent="space-between">
              <Text fontSize="md">{t('offlineMode')}</Text>
              <Switch size="sm" onValueChange={toggle} value={context.mod} />
            </HStack>
            <Divider my="2" />
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Language');
                }}>
                <View style={styles.item}>
                  <Text fontSize="md">{t('language')}</Text>
                  <Entypo name="chevron-right" size={20} />
                </View>
              </TouchableOpacity>
              <Divider my="2" />
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AppSettings');
                }}>
                <View style={styles.item}>
                  <Text fontSize="md">{t('appSettings')}</Text>
                  <Entypo name="chevron-right" size={20} />
                </View>
              </TouchableOpacity>
              <Divider my="2" />
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={exit}>
                <View style={styles.item}>
                  <HStack>
                    <Octicons name="sign-out" size={24} />
                    <Text marginLeft={3} fontSize="md">
                      {t('exit')}
                    </Text>
                  </HStack>

                  <Entypo name="chevron-right" size={20} />
                </View>
              </TouchableOpacity>
              <Divider my="2" />
            </View>
            <Heading size="sm">{t('uuid')}</Heading>
            <TouchableOpacity onPress={() => copyItem(context.deviceID)}>
              <Text fontSize="sm">{context.deviceID}</Text>
            </TouchableOpacity>
          </VStack>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default SettingsScreen;
