import React, {useState, useEffect, useRef, useContext} from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import data from '/Users/sametkarakurt/myProject/db.json';

import {useNetInfo} from '@react-native-community/netinfo';
import InternetConnection from '../../components/InternetAlert/InternetConnection';
import FormCard from '../../components/FormCard/FormCard';
import DropdownAlert from 'react-native-dropdownalert';
import {NativeBaseProvider, Box} from 'native-base';

import {Context} from '../../store/context';

export function HomeScreen({navigation}) {
  let dropDownAlertRef = useRef();
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);

  const [search, setSearch] = useState(null);

  const context = useContext(Context);

  const handleFormSelect = (id, formName) => {
    navigation.navigate('Form', {
      id: id,
      formName: formName,
      sendData: sendData,
      saveData: saveData,
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

    fetchData();
  }, []);

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

  const saveData = () => {
    dropDownAlertRef.alertWithType('success', 'Veriler Kaydedildi');
  };

  const sendData = () => {
    dropDownAlertRef.alertWithType('success', 'Veriler Gönderildi');
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
                source={require('/Users/sametkarakurt/myProject/images/ic_search-1.png')}
              />
            </View>

            <TextInput
              placeholder="Search"
              style={styles.textInput}
              onChangeText={text => searchFilter(text)}
            />
          </View>

          <FlatList data={filterData} renderItem={renderForm} />

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
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
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
