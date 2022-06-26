import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Button,
  Divider,
  Heading,
  VStack,
  Stack,
  ScrollView,
  Center,
  HStack,
  NativeBaseProvider,
} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SubmitButons = props => {
  const [data, setData] = useState(null);

  const postData = () => {
    axios
      .post('http://localhost:3000/forms', props.data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const saveData = async () => {
    const arr = [[props.data.id, JSON.stringify(props.data)]];
    AsyncStorage.multiSet(arr);
  };

  const getData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();

      if (keys.length > 0) {
        const storageJSON = await AsyncStorage.multiGet(keys);
        const storageData = storageJSON.map(item => [
          item[0],
          JSON.parse(item[1]),
        ]);
        console.log(storageData);
        setData(storageData);
      } else {
        setData(null);
      }
    } catch (err) {
      console.warn(`ERROR in getData: ${err}`);
    }
  };

  return (
    <NativeBaseProvider>
      <HStack w="100%" justifyContent={'space-between'}>
        <Button
          w="50%"
          colorScheme="green"
          onPress={() => {
            getData();
          }}>
          GÖNDER
        </Button>
        <Button
          w="50%"
          colorScheme="yellow"
          onPress={() => {
            saveData();
          }}>
          KAYDET
        </Button>
      </HStack>
    </NativeBaseProvider>
  );
};

export default SubmitButons;
