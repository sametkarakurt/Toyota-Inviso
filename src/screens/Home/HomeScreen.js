import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import forms from '../../../assets/data/feed';
import Fonstisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import Form from '../Form/FormScreen.js';
import NetInfo from '@react-native-community/netinfo';
import {useNetInfo} from '@react-native-community/netinfo';
import InternetConnection from '../../components/InternetAlert/InternetConnection';
import {AuthContext} from '../src/screens/utily';

export function HomeScreen(navigation) {
  const netInfo = useNetInfo();
  console.log(netInfo.isConnected);
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.searchButton}
        onPress={() => console.log('Samet')}>
        <Fonstisto name="search" size={25} color={'black'} />
        <Text style={styles.buttonText}>Search Form</Text>
      </Pressable>
      <InternetConnection />
      <Text>{JSON.stringify(netInfo.isConnected)}</Text>
      <FlatList
        data={forms}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.item}>
              <Text>{item.title}</Text>
              <Entypo name="chevron-right" size={16} />
            </View>
          </View>
        )}
      />
    </View>
  );
}
