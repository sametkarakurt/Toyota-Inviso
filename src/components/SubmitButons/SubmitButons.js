<<<<<<< HEAD
import React, {useState, useContext, useEffect} from 'react';
=======
import React, {useState, useEffect} from 'react';
>>>>>>> 72a9a7f7f228f89b5d8eb47bcd5b42621364f08e
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
<<<<<<< HEAD
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

  returngi
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
=======
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

  return (
    <NativeBaseProvider>
      <HStack w="100%" justifyContent={'space-between'}>
        <Button
          w="50%"
          colorScheme="green"
          onPress={() => {
            axios.post('http://localhost:3000/forms', props.data);
          }}>
          GÖNDER
        </Button>
        <Button
          w="50%"
>>>>>>> 72a9a7f7f228f89b5d8eb47bcd5b42621364f08e
          colorScheme="yellow"
          onPress={() => {
            saveData();
          }}>
<<<<<<< HEAD
          {t('save')}
=======
          KAYDET
>>>>>>> 72a9a7f7f228f89b5d8eb47bcd5b42621364f08e
        </Button>
      </HStack>
    </NativeBaseProvider>
  );
};

export default SubmitButons;
