import React, {useState, useContext, useEffect} from 'react';
import SelectBox from '../SelectBox/SelectBox';
import {NativeBaseProvider, Center, Box} from 'native-base';
import {Context} from '../../store/context';
import {useTranslation} from 'react-i18next';
const languageOptions = [
  {
    item: '',
    id: 'en',
  },
  {
    item: '',
    id: 'tr',
  },
];
const LanguageScreen = props => {
  const {t, i18n} = useTranslation();
  const context = useContext(Context);
  const [language, setLanguage] = useState();

  useEffect(() => {
    languageOptions[0].item = t('english');
    languageOptions[1].item = t('turkish');
    languageOptions.map(item => {
      if (item.id == context.language) {
        setLanguage(item.item);
      }
    });
  }, []);

  return (
    <NativeBaseProvider>
      <Center>
        <Box marginTop={5} minW="90%" maxW="90%" h="100%">
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
