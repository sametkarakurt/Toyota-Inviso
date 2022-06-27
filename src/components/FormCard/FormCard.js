import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import TextAreaComponent from '../TextArea/TextAreaComponent';
import {NativeBaseProvider, Radio, Heading} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
const FormCard = ({form, onSelect}) => {
  return (
    <View style={styles.row}>
      <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.item}>
          <Text>{form.name}</Text>
          <Entypo name="chevron-right" size={16} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FormCard;
