import React, {useState} from 'react';
import {View, Text, SafeAreaView,TouchableOpacity} from 'react-native';
import RadioButtonComponent from '../RadioButton/RadioButtonComponent';
import TextAreaComponent from '../TextArea/TextAreaComponent';
import {NativeBaseProvider, Center, ScrollView, Button} from 'native-base';
import styles from './style';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';
import SelectBox from '../SelectBox/SelectBox';
import CheckBox from '../CheckBox/CheckBox';
import MultiSelect from '../MultiSelect/MultiSelect';
import SubmitButons from '../SubmitButons/SubmitButons';
import InputEmail from '../InputEmail/InputEmail';
import InputNumber from '../InputNumber/InputNumber';
import uuid from 'react-native-uuid';
import Entypo from 'react-native-vector-icons/Entypo';
import Gallery from '../Gallery/Gallery';
import Video from '../Video/Video';
import ScanScreen from '../Scanner/Scanner';
const FormScreen = ({route,navigation}) => {
  const {id, formName} = route.params;
  const {loading, error, data} = useFetch(`${Config.API_URL}/${id}`);
  const formID = uuid.v4();

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  var currentDate = date + '/' + month + '/' + year;

  const [formData, setFormData] = useState({
    id: formID,
    formName: formName,
    date: currentDate,
    number: '',
    email: '',
    multiSelect: '',
    select: '',
    textArea: '',
    checkBox: '',
    radioButton: '',
    situation: 'Completed',
  });

  const numberInputChange = text => {
    setFormData({...formData, number: text});
  };

  const emailInputChange = text => {
    setFormData({...formData, email: text});
  };
  const multiSelectChange = text => {
    setFormData({...formData, multiSelect: text});
  };

  const selectChange = text => {
    setFormData({...formData, select: text});
  };

  const textAreaInputChange = text => {
    setFormData({...formData, textArea: text});
  };

  const checkBoxChange = text => {
    setFormData({...formData, checkBox: text});
  };

  const radioButtonChange = text => {
    setFormData({...formData, radioButton: text});
  };
  const K_OPTIONS = [
    {
      item: 'Female',
      id: 'female',
    },
    {
      item: 'Male',
      id: 'male',
    },
  ];

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Center>
          <ScrollView
            marginTop={5}
            maxW="90%"
            h="100%"
            _contentContainerStyle={{
              minW: '90%',
            }}>
            <InputNumber valueChange={numberInputChange} />
            <InputEmail valueChange={emailInputChange} />
            <MultiSelect valueChange={multiSelectChange} />
            <SelectBox
              valueChange={selectChange}
              data={K_OPTIONS}
              title={'Select'}
            />
            <TextAreaComponent valueChange={textAreaInputChange} />
            <CheckBox valueChange={checkBoxChange} />
            <RadioButtonComponent valueChange={radioButtonChange} />
            <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('CameraComponent');
                  }}>
                <View style={styles.item}>
                  <Text fontSize="md">Take Photo</Text>
                  <Entypo name="chevron-right" size={20} />
                </View>
              </TouchableOpacity>
              <Gallery />
              <Video />
              <Button onPress={() => {navigation.navigate('Scanner')}}>Barkod</Button>

            <SubmitButons data={formData} />
          </ScrollView>
        </Center>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default FormScreen;
