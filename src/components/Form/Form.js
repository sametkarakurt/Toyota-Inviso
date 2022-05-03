import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import RadioButtonComponent from '../RadioButton/RadioButtonComponent';
import TextAreaComponent from '../TextArea/TextAreaComponent';
import {NativeBaseProvider, Center, ScrollView} from 'native-base';
import styles from './style';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';
import SelectBox from '../SelectBox/SelectBox';
import CheckBox from '../CheckBox/CheckBox';
import MultiSelect from '../MultiSelect/MultiSelect';
import SubmitButons from '../SubmitButons/SubmitButons';
import InputEmail from '../InputEmail/InputEmail';
import InputNumber from '../InputNumber/InputNumber';
const FormScreen = ({route}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${Config.API_URL}/${id}`);

  console.log(data);
  return (
    <NativeBaseProvider>
      <Center>
        <ScrollView
          marginTop={5}
          maxW="90%"
          h="100%"
          _contentContainerStyle={{
            minW: '90%',
          }}>
          <InputNumber />
          <InputEmail />
          <MultiSelect />
          <SelectBox />
          <TextAreaComponent />
          <CheckBox />
          <RadioButtonComponent />
          <SubmitButons />
        </ScrollView>
      </Center>
    </NativeBaseProvider>
  );
};

export default FormScreen;
