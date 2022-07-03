import React, {useContext} from 'react';
import {View, TouchableOpacity, SafeAreaView, LogBox} from 'react-native';
import styles from './styles';
import {NativeBaseProvider, Divider, Text, Box} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import {Context} from '../../store/context';
import {useNetInfo} from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const TakePhoto = props => {
  const context = useContext(Context);
  const navigation = useNavigation();
  const netInfo = useNetInfo();
  function toggle() {
    context.toggleOfflineMod();
  }
  const {t, i18n} = useTranslation();

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Box>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Photo', {
                  func: props.route.params.func,
                  type: props.route.params.type,
                });
              }}>
              <View style={styles.item}>
                <Text fontSize="md">Fotoğraf Çek</Text>
                <Entypo name="chevron-right" size={20} />
              </View>
            </TouchableOpacity>
            <Divider my="2" />
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Gallery', {
                  func: props.route.params.func,
                  type: props.route.params.type,
                });
              }}>
              <View style={styles.item}>
                <Text fontSize="md">Galeriden Seç</Text>
                <Entypo name="chevron-right" size={20} />
              </View>
            </TouchableOpacity>
            <Divider my="2" />
          </View>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default TakePhoto;
