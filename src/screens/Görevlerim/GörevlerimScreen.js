import React, {useState, useContext} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {useNetInfo} from '@react-native-community/netinfo';
import {Context} from '../../store/context';
import InternetConnection from '../../components/InternetAlert/InternetConnection';
import {Box, NativeBaseProvider} from 'native-base';
const Görevlerim = ({route}) => {
  const context = useContext(Context);
  const netInfo = useNetInfo();
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Box>
          {(JSON.stringify(netInfo.isConnected) === 'false' ||
            context.mod === true) && <InternetConnection />}
          <View style={styles.container}>
            <Text>Görevlerim</Text>
          </View>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Görevlerim;
