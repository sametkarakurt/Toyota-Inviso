import React, {useState, useEffect, useRef, useContext} from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import data from '../../../db.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNetInfo} from '@react-native-community/netinfo';
import InternetConnection from '../../components/InternetAlert/InternetConnection';
import FormCard from '../../components/FormCard/FormCard';
import DropdownAlert from 'react-native-dropdownalert';
import {NativeBaseProvider, Box} from 'native-base';
import {useTranslation} from 'react-i18next';
import {Context} from '../../store/context';
import axios from 'axios';

export function HomeScreen({navigation}) {
  let dropDownAlertRef = useRef();
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);

  const [search, setSearch] = useState(null);
  const {t, i18n} = useTranslation();
  const context = useContext(Context);

  const handleFormSelect = (id, formName) => {
    navigation.navigate('Form', {
      id,
      formName,
      sendData,
      saveData,
    });
  };
  const renderForm = ({item}) => (
    <FormCard
      form={item}
      onSelect={() => handleFormSelect(item.id, item.name)}
    />
  );
  const netInfo = useNetInfo();

  useEffect(() => {
    const fetchData = async () => {
      setFilterData(data.data);
      setMasterData(data.data);
    };

    //Post data when app start
    const postData = async () => {
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
      } catch (err) {}
    };

    fetchData();
    postData();
  }, []);

  //Form filter
  const searchFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(masterData);
      setSearch(text);
    }
  };

  //Alerts
  const saveData = () => {
    dropDownAlertRef.alertWithType('success', t('saveAlert'));
  };

  const sendData = () => {
    dropDownAlertRef.alertWithType('success', t('sendAlert'));
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Box>
          {(JSON.stringify(netInfo.isConnected) === 'false' ||
            context.mod === true) && <InternetConnection />}

          <View style={styles.searchContainer}>
            <View style={styles.vwSearch}>
              <Image
                style={styles.icSearch}
                source={require('../../../assets/images/search.png')}
              />
            </View>

            <TextInput
              placeholder={t('search')}
              style={styles.textInput}
              onChangeText={text => searchFilter(text)}
            />
          </View>

          <FlatList data={filterData} renderItem={renderForm} />
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
}
const styles = StyleSheet.create({
  textInput: {
    // backgroundColor: 'green',
    flex: 1,
  },

  vwSearch: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 40,
    // backgroundColor: 'red'
  },
  icSearch: {
    height: 18,
    width: 18,
  },
  searchContainer: {
    backgroundColor: 'white',
    width: '90%',
    marginHorizontal: 20,
    marginTop: 20,
    height: 45,
    flexDirection: 'row',
    borderRadius: 5,
  },
  container: {
    backgroundColor: '#E8EAED',
    flex: 1,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  item: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  row: {
    paddingHorizontal: 20,
  },
});
