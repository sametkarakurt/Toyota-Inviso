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
import {FlatList} from 'react-native-gesture-handler';
import settings from '../../../assets/data/settings';
import InternetConnection from '../../components/InternetAlert/InternetConnection';
import Entypo from 'react-native-vector-icons/Entypo';
import {Context} from '../../store/context';
import {useNetInfo} from '@react-native-community/netinfo';
const SettingsScreen = ({navigation}) => {
  const context = useContext(Context);
  const netInfo = useNetInfo();
  function toggle() {
    context.toggleOfflineMod();
  }

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
            <Heading size="2xl">Ayarlar</Heading>
            <HStack
              marginTop={8}
              alignItems="center"
              justifyContent="space-between">
              <Text fontSize="md">Çevrimdışı Mod</Text>
              <Switch size="sm" onValueChange={toggle} value={context.mod} />
            </HStack>
            <Divider my="2" />
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Language');
                }}>
                <View style={styles.item}>
                  <Text fontSize="md">{'Dil'}</Text>
                  <Entypo name="chevron-right" size={20} />
                </View>
              </TouchableOpacity>
              <Divider my="2" />
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.item}>
                  <Text fontSize="md">{'Resim ve Uygulama Ayarları'}</Text>
                  <Entypo name="chevron-right" size={20} />
                </View>
              </TouchableOpacity>
              <Divider my="2" />
            </View>
            <Heading size="sm">Cihaz UUID</Heading>
            <Text fontSize="sm">{context.deviceID}</Text>
          </VStack>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default SettingsScreen;
