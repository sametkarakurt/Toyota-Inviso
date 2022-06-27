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

import InternetConnection from '../../components/InternetAlert/InternetConnection';
import Entypo from 'react-native-vector-icons/Entypo';
import {Context} from '../../store/context';
import {useNetInfo} from '@react-native-community/netinfo';
 
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
const TakePhoto = () => {
  const context = useContext(Context);
  const navigation = useNavigation(); 
  const netInfo = useNetInfo();
  function toggle() {
    context.toggleOfflineMod();
  }
  const {t, i18n} = useTranslation();

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Box>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Video');
                  }}>
                <View style={styles.item}>
                  <Text fontSize="md">Fotoğraf Çek</Text>
                  <Entypo name="chevron-right" size={20} />
                </View>
              </TouchableOpacity>
              <Divider my="2" />
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => {
                  navigation.navigate('Gallery');
        
                }}>
                <View style={styles.item}>
                  <Text fontSize="md">Galeriden Seç</Text>
                  <Entypo name="chevron-right" size={20} />
                </View>
              </TouchableOpacity>
              <Divider my="2" />
            </View>

        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default TakePhoto;
