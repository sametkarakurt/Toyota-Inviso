import React, {useState, useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import {Context} from '../../store/context';
import {xorBy} from 'lodash';
import {
  TextArea,
  Box,
  Center,
  NativeBaseProvider,
  VStack,
  HStack,
  Heading,
} from 'native-base';

const SelectBoxComponent = props => {
  const [selected, setSelected] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    if (
      props.title != 'Dil' &&
      props.title != 'Resim' &&
      props.title != 'Kamera'
    ) {
      if (props.formData.selectBoxComponent) {
        setSelected(props.formData.selectBoxComponent);
      }
    }

    setData([]);
    if (!props.data) {
      for (i = 2; i < Object.keys(props.options).length; i++) {
        const value = String(i);
        setData(oldArray => [
          ...oldArray,
          {
            item: props.options[value].key,
            id: props.options[value].name,
          },
        ]);
      }
    } else {
      setData(props.data);
    }
  }, []);

  return (
    <View style={{marginBottom: 30, marginTop: 15}}>
      <SelectBox
        options={data}
        label={props.label}
        inputPlaceholder={
          props.options
            ? props.options[0].key
            : props.value
            ? props.value
            : 'Select'
        }
        value={selected}
        onChange={val => {
          setSelected(val);
          props.valueChange(val);
        }}
        arrowIconColor={'black'}
        searchIconColor={'black'}
        toggleIconColor={'black'}
        hideInputFilter={true}
        labelStyle={props.label ? {} : {display: 'none'}}
      />
    </View>
  );
  function onChange() {
    return val => setSelectedTeam(val);
  }
};

export default SelectBoxComponent;
