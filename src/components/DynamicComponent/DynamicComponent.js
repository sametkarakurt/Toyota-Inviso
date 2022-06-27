import React, {useState,useEffect, createElement} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import RadioButtonComponent from '../RadioButton/RadioButtonComponent';
import TextAreaComponent from '../TextArea/TextAreaComponent';
import {NativeBaseProvider, Center, ScrollView, Button} from 'native-base';

import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';
import SelectBox from '../SelectBox/SelectBox';
import CheckBox from '../CheckBox/CheckBox';
import MultiSelect from '../MultiSelect/MultiSelect';
import SubmitButons from '../SubmitButons/SubmitButons';
import InputEmail from '../InputEmail/InputEmail';
import InputNumber from '../InputNumber/InputNumber';
import Gallery from '../Gallery/Gallery';
import Video from '../Video/Video';
import uuid from 'react-native-uuid';
import App from '../Date/Date';
import Location from '../Location/Location';
import DateComponent from '../Date/Date';
import CameraComponent from '../Camera/Camera';
import ScanScreen from '../Scanner/Scanner';
import DigitalSignature from '../DigitalSignature/DigitalSignature';
import TakePhotoButton from '../TakePhoto/TakePhotoButton';
import TakePhotoCommentButton from '../TakePhotoComment/TakePhotoCommentButton';
import ScannerButton from '../Scanner/ScannerButton';
import DigitalSignatureButton from '../DigitalSignature/DigitalSignatureButton';


const DynamicComponent = props  => {

  const Components = {
    
    numberComponent : InputNumber,
    dateComponent: DateComponent,
    emailComponent: InputEmail,
    textAreaComponent: TextAreaComponent,
    multiSelectComponent: MultiSelect,
    selectBoxComponent: SelectBox,
    chechBoxComponent: CheckBox,
    radioButtonComponent: RadioButtonComponent,
    cameraComponent: TakePhotoButton,
    videoComponent: CameraComponent,
    scannerComponent: ScannerButton,
    takePhotoCommentComponent: TakePhotoCommentButton,
    signatureComponent: DigitalSignatureButton,
    submitButton: SubmitButons,
   
  }



  if (typeof props.type !== "undefined") {
    return React.createElement(Components[props.type],{options:props.options,valueChange:props.valueChange,key:props.key});
  }


};

export default DynamicComponent;

