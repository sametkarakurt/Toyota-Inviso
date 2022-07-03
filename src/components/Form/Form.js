import React, {useState, useContext, useEffect} from 'react';
import {SafeAreaView, Image, StyleSheet} from 'react-native';
import {NativeBaseProvider, Center, Box, FlatList} from 'native-base';
import uuid from 'react-native-uuid';
import Location from '../Location/Location';
import DynamicComponent from '../DynamicComponent/DynamicComponent';
import data from '../../../db.json';
import {LogBox} from 'react-native';
import {Context} from '../../store/context';
LogBox.ignoreLogs([
  'new NativeEventEmitter',
  'Non-serializable values were found in the navigation state',
]);
const FormScreen = ({route, navigation}) => {
  const {id, formName} = route.params;
  const formID = uuid.v4();
  const context = useContext(Context);

  //Date
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  var currentDate = date + '/' + month + '/' + year;

  //JSON
  const [formData, setFormData] = useState({
    id: formID,
    username: context.username,
    deviceId: context.deviceID,
    formName: formName,
    currentDate: currentDate,
    dateComponent: '',
    numberComponent: '',
    emailComponent: '',
    multiSelectComponent: '',
    selectBoxComponent: '',
    textAreaComponent: '',
    chechBoxComponent: '',
    radioButtonComponent: [],
    scannerComponent: '',
    signatureComponent: '',
    takePhoto: [],
    takePhotoCommentComponent: [],
    videoComponent: '',
    situation: '',
    location: '',
  });

  //useState Functions
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
      setFormData({...formData, takePhoto: filtered});
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

  const removeSignature = text => {
    setFormData({...formData, signatureComponent: ''});
  };

  const [typeArray, setTypeArray] = useState([]);

  //Match Array
  const fields = [
    {value: 'Input Number', type: 'numberComponent', func: 'numberInputChange'},
    {value: 'Input Date', type: 'dateComponent', func: 'dateChange'},
    {value: 'Input Email', type: 'emailComponent', func: 'emailInputChange'},
    {value: 'TextArea', type: 'textAreaComponent', func: 'textAreaInputChange'},
    {
      value: 'MultiSelect',
      type: 'multiSelectComponent',
      func: 'multiSelectChange',
    },
    {value: 'Selectbox', type: 'selectBoxComponent', func: 'selectChange'},
    {value: 'Checkbox', type: 'chechBoxComponent', func: 'checkBoxChange'},
    {
      value: 'RadioButton',
      type: 'radioButtonComponent',
      func: 'radioButtonChange',
    },
    {value: 'Fotoğraf Çek', type: 'takePhoto', func: 'photoChange'},
    {value: 'RECORD VIDEO', type: 'videoComponent', func: 'videoChange'},
    {
      value: 'Fotoğraf ve Yorum',
      type: 'takePhotoCommentComponent',
      func: 'photoCommentChange',
    },
    {value: 'true', type: 'scannerComponent', func: 'scannerChange'},
    {value: 'Signature', type: 'signatureComponent', func: 'signatureChange'},
  ];

  //Parse JSON and Matching with array
  useEffect(() => {
    setTypeArray([]);
    const fetchData = async () => {
      data.data[0].pages[0].forms.forEach(items => {
        items.rows.forEach(item => {
          item.components.forEach(comp => {
            if (comp.options[0]) {
              fields.forEach(item => {
                if (item.value === comp.options[0].key) {
                  setTypeArray(oldArray => [
                    ...oldArray,
                    {
                      itemType: item.type,
                      itemOptions: comp.options,
                      func: item.func,
                    },
                  ]);
                }
              });
            } else {
              fields.forEach(item => {
                if (item.value === comp.key) {
                  setTypeArray(oldArray => [
                    ...oldArray,
                    {itemType: item.type, itemOptions: null, func: item.func},
                  ]);
                } else if (item.value == comp.type) {
                  setTypeArray(oldArray => [
                    ...oldArray,
                    {itemType: item.type, itemOptions: null, func: item.func},
                  ]);
                }
              });
            }
          });
        });
      });

      setTypeArray(oldArray => [...oldArray, {itemType: 'submitButton'}]);
    };

    fetchData();
  }, []);

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.safe}>
        <Center>
          <Box marginTop={5} minW="100%" maxW="100%" h="100%">
            <Location func={locationChange} />

            <FlatList
              marginBottom={50}
              contentContainerStyle={{marginHorizontal: 15}}
              data={typeArray}
              renderItem={perComponent => {
                return (
                  <DynamicComponent
                    type={perComponent.item.itemType}
                    options={perComponent.item.itemOptions}
                    valueChange={eval(perComponent.item.func)}
                    data={formData}
                    compArr={typeArray}
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

export default FormScreen;
const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  safe: {
    backgroundColor: '#E8EAED',
  },
});
