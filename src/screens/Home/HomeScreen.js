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
export function HomeScreen({navigation}) {
  const {loading, data, error} = useFetch(Config.API_URL);
  const handleFormSelect = id => {
    navigation.navigate('Form', {id});
  };
  const renderForm = ({item}) => (
    <FormCard form={item} onSelect={() => handleFormSelect(item.id)} />
  );

  const netInfo = useNetInfo();
  return (
    <SafeAreaView style={styles.container}>
      <View>
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
      </View>
    </SafeAreaView>
  );
}
