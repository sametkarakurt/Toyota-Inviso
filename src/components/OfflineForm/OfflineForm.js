import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import RadioButtonComponent from '../RadioButton/RadioButtonComponent';
import TextAreaComponent from '../TextArea/TextAreaComponent';
import {
  NativeBaseProvider,
  Center,
  ScrollView,
  Button,
  Box,
  FlatList,
} from 'native-base';
import styles from './style';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';
import SelectBox from '../SelectBox/SelectBox';
import CheckBox from '../CheckBox/CheckBox';
import MultiSelect from '../MultiSelect/MultiSelect';
import SubmitButons from '../SubmitButons/SubmitButons';
import InputEmail from '../InputEmail/InputEmail';
import InputNumber from '../InputNumber/InputNumber';
import Gallery from '../Gallery/Gallery';
import Photo from '../Photo/Photo';
import uuid from 'react-native-uuid';
import DateComponent from '../Date/Date';
import Location from '../Location/Location';
import DynamicComponent from '../DynamicComponent/DynamicComponent';
import axios from 'axios';
import TakePhotoButton from '../TakePhoto/TakePhotoButton';
import data from '/Users/sametkarakurt/myProject/db.json';
const OfflineForm = ({route, navigation}) => {
  const {id, formName} = route.params;
  const formID = uuid.v4();

  const [formData, setFormData] = useState(route.params.formData[0]);

  const numberInputChange = text => {
    setFormData({...formData, numberComponent: text});
  };

  const emailInputChange = text => {
    setFormData({...formData, emailComponent: text});
  };
  const multiSelectChange = text => {
    setFormData({...formData, multiSelectComponent: text});
  };

  const selectChange = text => {
    setFormData({...formData, selectBoxComponent: text});
  };

  const textAreaInputChange = text => {
    setFormData({...formData, textAreaComponent: text});
  };

  const checkBoxChange = text => {
    setFormData({...formData, chechBoxComponent: text});
  };

  const radioButtonChange = text => {
    setFormData({...formData, radioButtonComponent: text});
  };

  const dateChange = text => {
    setFormData({...formData, dateComponent: text});
  };

  const photoChange = (text, type) => {
    if (type == 'add') {
      var arr = formData.takePhoto;
      arr.push(text);
      setFormData({...formData, takePhoto: arr});
    } else if (type == 'remove') {
      var filtered = formData.takePhoto.filter(function (value) {
        return value != text;
      });

      setFormData({...formData, takePhoto: []});
    }
  };

  const photoCommentChange = (text, type) => {
    if (type == 'add') {
      var arr = formData.takePhotoCommentComponent;
      arr.push(text);
      setFormData({...formData, takePhotoCommentComponent: arr});
    } else if (type == 'remove') {
      var filtered = formData.takePhotoCommentComponent.filter(function (
        value,
      ) {
        return value != text;
      });
      setFormData({...formData, takePhotoCommentComponent: filtered});
    }
  };

  const videoChange = text => {
    setFormData({...formData, videoComponent: text});
  };

  const locationChange = text => {
    setFormData({...formData, location: text});
  };

  const scannerChange = text => {
    setFormData({...formData, scannerComponent: text});
  };

  const signatureChange = text => {
    setFormData({...formData, signatureComponent: text});
  };

  const item = route.params.formData;

  useEffect(() => {
    console.log(route.params.sendData);
  }, []);

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Center>
          <Box marginTop={5} minW="100%" maxW="100%" h="100%">
            <FlatList
              marginBottom={50}
              contentContainerStyle={{marginHorizontal: 15}}
              data={route.params.formData[1]}
              renderItem={perComponent => {
                return (
                  <DynamicComponent
                    compArr={route.params.formData[1]}
                    compValue={item[perComponent.item.itemType]}
                    type={perComponent.item.itemType}
                    options={perComponent.item.itemOptions}
                    valueChange={eval(perComponent.item.func)}
                    data={formData}
                    sendData={route.params.sendData}
                    saveData={route.params.saveData}
                  />
                );
              }}
            />
          </Box>
        </Center>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default OfflineForm;
