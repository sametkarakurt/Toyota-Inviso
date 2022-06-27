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
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>
          <HStack alignItems="baseline">
            <Heading fontSize="lg">Multi Select</Heading>
          </HStack>
          <SelectBox
            options={data}
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
        </VStack>
      </Box>
    </NativeBaseProvider>
  );

  function onMultiChange() {
    return item => setSelected(xorBy(selected, [item], 'id'));
  }
};

export default MultiSelect;
