import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Button,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OfflineScreen = ({route}) => {
  const [data, setData] = useState([]);
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
  const tableHead = ['Barkod', 'Form', 'İşlem Tarihi', 'Durumu'];
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: 'gray'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          {data.map(item => {
            return (
              <Rows
                data={[
                  [item[0], item[1].formName, item[1].date, item[1].situation],
                ]}
                textStyle={styles.text}
              />
            );
          })}
        </Table>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OfflineScreen;
