import React, {useState,useEffect} from 'react';
import {Text, View} from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import {
  TextArea,
  Box,
  Center,
  NativeBaseProvider,
  VStack,
  HStack,
  Heading,
} from 'native-base';
import {xorBy} from 'lodash';


const MultiSelect = props => {
  const [selected, setSelected] = useState([]);
  const [data,setData] = useState([])
  useEffect(() => {

    if(props.formData.multiSelectComponent){
      setSelected(props.formData.multiSelectComponent)
    }
    setData([])
    for(i = 2; i < Object.keys(props.options).length; i++) {
      const value = String(i);
      setData(oldArray => [...oldArray, {
        item: props.options[value].key,
        id: props.options[value].name,
      }])
    }


  }, []);
  return (
 
 
    <View style={{marginBottom:15,marginTop:15}}>
          <SelectBox
            options={data}
            
            inputPlaceholder={"Nothing selected"}
            selectedValues={selected}
            onMultiSelect={item => {
              setSelected(xorBy(selected, [item], 'id'));
              props.valueChange(xorBy(selected, [item], 'id'));
            }}
            onTapClose={onMultiChange()}
            arrowIconColor={'black'}
            toggleIconColor={'black'}
            hideInputFilter={true}
            multiOptionContainerStyle={{backgroundColor: 'black'}}
            labelStyle={{display: 'none'}}
            isMulti
          />
   </View>
          
  );

  function onMultiChange() {
    return item => setSelected(xorBy(selected, [item], 'id'));
  }
};

export default MultiSelect;
