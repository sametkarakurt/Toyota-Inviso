import React, {useState, useEffect, createElement} from 'react';
import RadioButtonComponent from '../RadioButton/RadioButtonComponent';
import TextAreaComponent from '../TextArea/TextAreaComponent';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';
import SelectBox from '../SelectBox/SelectBox';
import CheckBox from '../CheckBox/CheckBox';
import MultiSelect from '../MultiSelect/MultiSelect';
import SubmitButons from '../SubmitButons/SubmitButons';
import InputEmail from '../InputEmail/InputEmail';
import InputNumber from '../InputNumber/InputNumber';

import DateComponent from '../Date/Date';
import TakeVideoButton from '../TakeVideo/TakeVideoButton';
import TakePhotoButton from '../TakePhoto/TakePhotoButton';
import TakePhotoCommentButton from '../TakePhotoComment/TakePhotoCommentButton';
import ScannerButton from '../Scanner/ScannerButton';
import DigitalSignatureButton from '../DigitalSignature/DigitalSignatureButton';

const DynamicComponent = props => {
  const Components = {
    numberComponent: InputNumber,
    dateComponent: DateComponent,
    emailComponent: InputEmail,
    textAreaComponent: TextAreaComponent,
    multiSelectComponent: MultiSelect,
    selectBoxComponent: SelectBox,
    chechBoxComponent: CheckBox,
    radioButtonComponent: RadioButtonComponent,
    takePhoto: TakePhotoButton,
    videoComponent: TakeVideoButton,
    scannerComponent: ScannerButton,
    takePhotoCommentComponent: TakePhotoCommentButton,
    signatureComponent: DigitalSignatureButton,
    submitButton: SubmitButons,
  };

  if (typeof props.type !== 'undefined') {
    return React.createElement(Components[props.type], {
      options: props.options,
      valueChange: props.valueChange,
      key: props.key,
      formData: props.data,
      compArr: props.compArr,
      compValue: props.compValue,
      sendData: props.sendData,
      saveData: props.saveData,
    });
  }
};

export default DynamicComponent;
