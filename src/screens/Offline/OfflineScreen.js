import React, {useState, useEffect, useRef, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Table, Row, Rows} from 'react-native-table-component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InternetConnection from '../../components/InternetAlert/InternetConnection';
import {Context} from '../../store/context';
import {useNetInfo} from '@react-native-community/netinfo';
import {NativeBaseProvider, Box} from 'native-base';
import {useTranslation} from 'react-i18next';
import axios from 'axios';

const OfflineScreen = ({navigation}) => {
  let dropDownAlertRef = useRef();
  const {t, i18n} = useTranslation();
  const [data, setData] = useState([]);
  const context = useContext(Context);
  const netInfo = useNetInfo();

  const saveData = () => {
    dropDownAlertRef.alertWithType('success', t('saveAlert'));
  };

  const sendData = () => {
    dropDownAlertRef.alertWithType('success', t('refreshAlert'));
  };
  const postData = async () => {
    if (
      JSON.stringify(netInfo.isConnected) === 'true' ||
      context.mod === false
    ) {
      try {
        const keys = await AsyncStorage.getAllKeys();

        if (keys.length > 0) {
          const storageJSON = await AsyncStorage.multiGet(keys);

          const storageData = storageJSON.map(item => [
            item[0],
            JSON.parse(item[1]),
          ]);
          storageData.map(item => {
            if (item[1][0].situation == 'Tamamlandı') {
              axios
                .post('https://httpbin.org/post', item[1][0])
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });

              AsyncStorage.removeItem(item[0]);
            }
          });
        }
      } catch (err) {
        console.warn(`ERROR in getData: ${err}`);
      }
    }

    getData();
  };

  const getData = async () => {
    setData([]);
    try {
      const keys = await AsyncStorage.getAllKeys();

      if (keys.length > 0) {
        const storageJSON = await AsyncStorage.multiGet(keys);

        const storageData = storageJSON.map(item => [
          item[0],
          JSON.parse(item[1]),
        ]);

        setData(storageData);
      }
    } catch (err) {
      console.warn(`ERROR in getData: ${err}`);
    }
  };
  const tableHead = [t('barcode'), t('form'), t('date'), t('status')];
  const [tableData, setTableData] = useState([]);
  const [value, setValue] = useState();

  useEffect(() => {
    getData();
  }, [context.keys]);

  const formFunction = data => {
    navigation.navigate('OfflineForm', {
      formData: data,
      sendData: sendData,
      saveData: saveData,
    });
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Box
          marginTop={
            JSON.stringify(netInfo.isConnected) === 'false' ||
            context.mod === true
              ? 0
              : 7
          }>
          {(JSON.stringify(netInfo.isConnected) === 'false' ||
            context.mod === true) && <InternetConnection />}

          <TouchableOpacity
            style={{
              color: 'white',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginRight: 20,
              marginBottom: 10,
            }}
            onPress={postData}>
            <FontAwesome name="refresh" size={20} />
          </TouchableOpacity>

          <ScrollView style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: 'gray'}}>
              <Row
                data={tableHead}
                style={styles.head}
                textStyle={styles.text}
                flexArr={[4, 2, 3, 3]}
              />
              {data &&
                data.map((item, index) => {
                  return (
                    <Rows
                      key={index}
                      flexArr={[4, 2, 3, 3]}
                      data={[
                        [
                          <Button
                            onPress={() => formFunction(item[1])}
                            title={item[0]}></Button>,
                          item[1][0].formName,
                          item[1][0].currentDate,
                          item[1][0].situation,
                        ],
                      ]}
                      textStyle={styles.text}
                    />
                  );
                })}
            </Table>
          </ScrollView>
          <DropdownAlert
            ref={ref => {
              if (ref) {
                dropDownAlertRef = ref;
              }
            }}
          />
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default OfflineScreen;
