import React, {useState, useContext, useEffect} from 'react';
import {Button, HStack, NativeBaseProvider} from 'native-base';
import {Context} from '../../store/context';
import useSend from '../../hooks/useFetch/usePost';
import {useTranslation} from 'react-i18next';
import {useNetInfo} from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
const SubmitButons = props => {
  const navigation = useNavigation();
  const context = useContext(Context);
  const netInfo = useNetInfo();
  const [data, setData] = useState(null);
  const [url, setUrl] = useState('');
  const {t, i18n} = useTranslation();

  //Post the data

  //Save the data
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

  useSend(url, props.formData);

  const postData = async () => {
    props.formData.situation = 'Tamamlandı';
    // Has no internet connection. Save device database.
    if (
      JSON.stringify(netInfo.isConnected) === 'false' ||
      context.mod === true
    ) {
      newJSON = [props.formData, props.compArr];
      const arr = [[props.formData.id, JSON.stringify(newJSON)]];
      AsyncStorage.multiSet(arr);
      context.changeKey(arr);
    } else {
      // Has internet connection. Post the url.
      setUrl('https://httpbin.org/post');
      AsyncStorage.removeItem(props.formData.id);
      if (props.sendData) {
        props.sendData();
      }
    }

    navigation.pop(1);
  };

  useEffect(() => {}, [url]);

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
