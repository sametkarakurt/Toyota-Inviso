import React, {useState, useContext, useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import SelectBox from '../SelectBox/SelectBox';
import {
  NativeBaseProvider,
  Heading,
  Center,
  ScrollView,
  Box,
  VStack,
  HStack,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {Context} from '../../store/context';
import {useTranslation} from 'react-i18next';
const photoResolutionOptions = [
  {
    id: '0.1',
    item: '10',
  },
  {
    id: '0.2',
    item: '20',
  },
  {
    id: '0.3',
    item: '30',
  },
  {
    id: '0.4',
    item: '40',
  },
  {
    id: '0.5',
    item: '50',
  },
  {
    id: '0.6',
    item: '60',
  },
  {
    id: '0.7',
    item: '70',
  },
  {
    id: '0.8',
    item: '80',
  },
  {
    id: '0.9',
    item: '90',
  },
  {
    id: '1',
    item: '100',
  },
];

const cameraOptions = [
  {
    id: '1',
    item: '',
  },
  {
    id: '0.5',
    item: '',
  },
];

const AppSettings = props => {
  const {t, i18n} = useTranslation();
  const context = useContext(Context);
  const [cameraResolution, setCameraResolution] = useState();
  const [photoResolution, setPhotoResolution] = useState();

  useEffect(() => {
    cameraOptions[0].item = t('high');
    cameraOptions[1].item = t('low');
    cameraOptions.map(item => {
      if (item.id == context.cameraResolution) {
        setCameraResolution(item.item);
      }
    });

    photoResolutionOptions.map(item => {
      if (item.id == context.photoResolution) {
        setPhotoResolution(item.item);
      }
    });
  }, []);

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Center>
          <Box
            marginTop={5}
            minW="90%"
            _contentContainerStyle={{
              minW: '90%',
            }}>
            <Heading fontSize="lg">{t('picture')}</Heading>
            <SelectBox
              label={t('quality')}
              title={'Resim'}
              value={photoResolution}
              data={photoResolutionOptions}
              valueChange={val => {
                context.changePhotoResolution(val.id);
              }}
            />

            <Heading fontSize="lg">{t('camera')}</Heading>
            <SelectBox
              label={t('quality')}
              title={'Kamera'}
              value={cameraResolution}
              data={cameraOptions}
              valueChange={val => {
                context.changeCameraResolution(val.id);
              }}
            />
          </Box>
        </Center>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default AppSettings;
