import React, {useState, useContext,useEffect} from 'react';
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
  const [language,setLanguage] = useState();

  useEffect(() => {
    languageOptions.map((item) => {
      if(item.id == context.language){
        setLanguage(item.item)
      }
    })
  }, []);

  return (
    <NativeBaseProvider>
      <Center>
      <Box
        marginTop={5}
        minW="90%"
        maxW="90%"
        h="100%"
       >
        <SelectBox
          title={'Dil'}
          value={language}
          data={languageOptions}
          valueChange={language => {
            context.changeLanguage(language.id);
          }}
        />
      </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default LanguageScreen;