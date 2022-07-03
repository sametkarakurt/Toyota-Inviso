import React, {useState, useEffect, useRef, useContext} from 'react';
import {
  Text,
  SafeAreaView,
  Button,
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
import {NativeBaseProvider, HStack, Box} from 'native-base';
import {useTranslation} from 'react-i18next';
import axios from 'axios';

const OfflineScreen = ({navigation}) => {
  let dropDownAlertRef = useRef();
  const {t, i18n} = useTranslation();
  const [data, setData] = useState([]);
  const context = useContext(Context);
  const netInfo = useNetInfo();

  //Alerts
  const saveData = () => {
    dropDownAlertRef.alertWithType('success', t('saveAlert'));
  };

  const sendData = () => {
    dropDownAlertRef.alertWithType('success', t('refreshAlert'));
  };

  //Function of refresh button
  const postData = async () => {
    if (context.mod === false) {
      if (JSON.stringify(netInfo.isConnected) === 'true') {
        try {
          const keys = await AsyncStorage.getAllKeys();

          if (keys.length > 0) {
            var storageJSON = await AsyncStorage.multiGet(keys);
            storageJSON = storageJSON.filter(item => item[0] != 'username');
            storageJSON = storageJSON.filter(item => item[0] != 'password');

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
    }

    getData();
  };

  //Get data from device database
  const getData = async sortingStyle => {
    setData([]);
    try {
      const keys = await AsyncStorage.getAllKeys();

      if (keys.length > 0) {
        var storageJSON = await AsyncStorage.multiGet(keys);
        storageJSON = storageJSON.filter(item => item[0] != 'username');
        storageJSON = storageJSON.filter(item => item[0] != 'password');
        const storageData = storageJSON.map(item => [
          item[0],
          JSON.parse(item[1]),
        ]);

        //Sorting data by column header
        if (sortingStyle == 'barcode') {
          setData(storageData.sort());
        } else if (sortingStyle == 'form') {
          setData(
            storageData.sort((a, b) => {
              let x = a[1][0]['formName'].toLowerCase();
              let y = b[1][0]['formName'].toLowerCase();
              if (x < y) {
                return -1;
              }
              if (x > y) {
                return 1;
              }
              return 0;
            }),
          );
        } else if (sortingStyle == 'date') {
          setData(
            storageData.sort((a, b) => {
              let x = a[1][0]['currentDate'];
              const myArray = x.split('/');
              let y = b[1][0]['currentDate'];
              const myArray2 = y.split('/');
              if (myArray[2] < myArray2[2]) {
                return -1;
              }
              if (myArray[2] > myArray2[2]) {
                return 1;
              }
              if (myArray[2] == myArray2[2]) {
                if (myArray[1] < myArray2[1]) {
                  return -1;
                }
                if (myArray[1] > myArray2[1]) {
                  return 1;
                }
                if (myArray[1] == myArray2[1]) {
                  if (myArray[0] < myArray2[0]) {
                    return -1;
                  }
                  if (myArray[0] > myArray2[0]) {
                    return 1;
                  }
                }
              }
              return 0;
            }),
          );
        } else if (sortingStyle == 'status') {
          setData(
            storageData.sort((a, b) => {
              let x = a[1][0]['situation'].toLowerCase();
              let y = b[1][0]['situation'].toLowerCase();
              if (x < y) {
                return -1;
              }
              if (x > y) {
                return 1;
              }
              return 0;
            }),
          );
        } else {
          setData(storageData);
        }
      }
    } catch (err) {
      console.warn(`ERROR in getData: ${err}`);
    }
  };
  const tableHead = [
    <TouchableOpacity
      onPress={() => {
        getData('barcode');
      }}>
      <HStack>
        <FontAwesome style={styles.icon} name="caret-down" size={20} />
        <Text style={styles.icon}>{t('barcode')}</Text>
      </HStack>
    </TouchableOpacity>,
    <TouchableOpacity
      onPress={() => {
        getData('form');
      }}>
      <HStack>
        <FontAwesome style={styles.icon} name="caret-down" size={20} />
        <Text style={styles.icon}>{t('form')}</Text>
      </HStack>
    </TouchableOpacity>,
    <TouchableOpacity
      onPress={() => {
        getData('date');
      }}>
      <HStack>
        <FontAwesome style={styles.icon} name="caret-down" size={20} />
        <Text style={styles.icon}>{t('date')}</Text>
      </HStack>
    </TouchableOpacity>,
    <TouchableOpacity
      onPress={() => {
        getData('status');
      }}>
      <HStack>
        <FontAwesome style={styles.icon} name="caret-down" size={20} />
        <Text style={styles.icon}>{t('status')}</Text>
      </HStack>
    </TouchableOpacity>,
  ];
  const [tableData, setTableData] = useState([]);
  const [value, setValue] = useState();

  useEffect(() => {
    postData();
  }, [context.keys]);

  //Reach saved form
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
                flexArr={[4, 3, 3, 3]}
              />
              {data &&
                data.map((item, index) => {
                  return (
                    <Rows
                      key={index}
                      flexArr={[4, 3, 3, 3]}
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
        </Box>
      </SafeAreaView>
      <DropdownAlert
        ref={ref => {
          if (ref) {
            dropDownAlertRef = ref;
          }
        }}
      />
    </NativeBaseProvider>
  );
};

export default OfflineScreen;
