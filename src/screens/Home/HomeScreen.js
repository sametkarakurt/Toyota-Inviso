import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  SafeAreaView,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';

import Fonstisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

import {useNetInfo} from '@react-native-community/netinfo';
import InternetConnection from '../../components/InternetAlert/InternetConnection';
import FormCard from '../../components/FormCard/FormCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading } from "native-base";


import {Context} from '../../store/context';




export function HomeScreen({navigation}) {

  const [filterData,setFilterData] = useState([])
  const [masterData,setMasterData] = useState([])
  
  const [search,setSearch] = useState(null)
  
  const context = useContext(Context);

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

  useEffect(() => {
    setFilterData(data);
    setMasterData(data);

  }, []);
  const netInfo = useNetInfo();

  const searchFilter = (text) => {
    if(text) {
      const newData = masterData.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() 
        : ''.toUpperCase();


      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilterData(newData);
    setSearch(text);
  }else {
    setFilterData(masterData);
    setSearch(text);
  }
} 
    
    
  

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Box>
          {(JSON.stringify(netInfo.isConnected) === 'false' ||
            context.mod === true) && <InternetConnection />}

          
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
