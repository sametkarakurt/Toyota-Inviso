import React, {useState, useContext, useEffect} from 'react';
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
import {Context} from '../../store/context';
import {useTranslation} from 'react-i18next';
import {useNetInfo} from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
const SubmitButons = props => {
  const navigation = useNavigation();
  const context = useContext(Context);
  const netInfo = useNetInfo();
  const [data, setData] = useState(null);
  const {t, i18n} = useTranslation();
  const postData = async () => {
    props.formData.situation = 'Tamamlandı';
    if (
      JSON.stringify(netInfo.isConnected) === 'false' ||
      context.mod === true
    ) {
      newJSON = [props.formData, props.compArr];
      const arr = [[props.formData.id, JSON.stringify(newJSON)]];
      AsyncStorage.multiSet(arr);
      context.changeKey(arr);
    } else {
      axios
        .post('https://httpbin.org/post', props.formData)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      AsyncStorage.removeItem(props.formData.id);
      if (props.sendData) {
        props.sendData();
      }
    }

    navigation.pop(1);
  };

  const saveData = async () => {
    props.formData.situation = 'Taslak Olarak Kaydedildi';

    newJSON = [props.formData, props.compArr];
    const arr = [[props.formData.id, JSON.stringify(newJSON)]];
    AsyncStorage.multiSet(arr);
    context.changeKey(arr);
    if (props.saveData) {
      props.saveData();
    }

    navigation.pop(1);
  };

  return (
    <NativeBaseProvider>
      <HStack w="100%" justifyContent={'space-between'}>
        <Button
          w="49%"
          colorScheme="success"
          onPress={() => {
            postData();
          }}>
          {t('send')}
        </Button>
        <Button
          w="49%"
          colorScheme="yellow"
          onPress={() => {
            saveData();
          }}>
          {t('save')}
        </Button>
      </HStack>
    </NativeBaseProvider>
  );
};

export default SubmitButons;
