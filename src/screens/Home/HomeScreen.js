import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import Fonstisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

import {useNetInfo} from '@react-native-community/netinfo';
import InternetConnection from '../../components/InternetAlert/InternetConnection';
import FormCard from '../../components/FormCard/FormCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import {
  Checkbox,
  Heading,
  HStack,
  VStack,
  Box,
  Center,
  NativeBaseProvider,
} from 'native-base';
export function HomeScreen({navigation}) {
  const {loading, data, error} = useFetch(Config.API_URL);
  const handleFormSelect = (id, formName) => {
    navigation.navigate('Form', {id: id, formName: formName});
  };
  const renderForm = ({item}) => (
    <FormCard
      form={item}
      onSelect={() => handleFormSelect(item.id, item.name)}
    />
  );
  const netInfo = useNetInfo();

  useEffect(() => {
    if (JSON.stringify(netInfo.isConnected) === 'true') {
    }
  }, [netInfo.isConnected]);

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Box>
          {JSON.stringify(netInfo.isConnected) === 'false' && (
            <InternetConnection />
          )}
          <Pressable
            style={styles.searchButton}
            onPress={() => console.log('Samet')}>
            <Fonstisto name="search" size={25} color={'black'} />
            <Text style={styles.buttonText}>Search Form</Text>
          </Pressable>
          <FlatList data={data} renderItem={renderForm} />
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
