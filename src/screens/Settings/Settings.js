import React, {useState, useEffect} from 'react';
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
} from 'native-base';
import {FlatList} from 'react-native-gesture-handler';
import settings from '../../../assets/data/settings';
import Fonstisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';

const SettingsScreen = ({route}) => {
  const uniqueId = useSelector(s => s.uniqueID);
  const dispatch = useDispatch();
  const handleGet = () => {
    dispatch({type: 'GET_ID'});
  };
  useEffect(() => {
    handleGet();
  }, []);
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <VStack marginTop={5} paddingX={5}>
          <Heading size="2xl">Ayarlar</Heading>
          <HStack
            marginTop={8}
            alignItems="center"
            justifyContent="space-between">
            <Text fontSize="md">Bluetooth</Text>
            <Switch size="sm" />
          </HStack>
          <Divider my="2" />
          <FlatList
            data={settings}
            renderItem={({item}) => (
              <View style={styles.row}>
                <TouchableOpacity onPress={console.log('samet')}>
                  <View style={styles.item}>
                    <Text fontSize="md">{item.title}</Text>
                    <Entypo name="chevron-right" size={20} />
                  </View>
                </TouchableOpacity>
                <Divider my="2" />
              </View>
            )}
          />
          <Heading size="sm">Cihaz UUID</Heading>
          <Text fontSize="sm">{uniqueId}</Text>
        </VStack>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default SettingsScreen;
