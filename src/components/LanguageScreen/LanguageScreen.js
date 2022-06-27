import React, {useState, useContext} from 'react';
import {Text, View} from 'react-native';
import SelectBox from '../SelectBox/SelectBox';
import {NativeBaseProvider, Center, ScrollView, Box} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {Context} from '../../store/context';
const languageOptions = [
  {
    item: 'English',
    id: 'en',
  },
  {
    item: 'Türkçe',
    id: 'tr',
  },
];
const LanguageScreen = props => {
  const context = useContext(Context);
  return (
    <NativeBaseProvider>
      <Box
        marginTop={5}
        maxW="90%"
        h="100%"
        _contentContainerStyle={{
          minW: '90%',
        }}>
        <SelectBox
          title={'Dil'}
          data={languageOptions}
          valueChange={language => {
            context.changeLanguage(language);
          }}
        />
      </Box>
    </NativeBaseProvider>
  );
};

export default LanguageScreen;
