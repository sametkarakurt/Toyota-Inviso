import React, {useState, useContext,useEffect} from 'react';
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
  const [data,setData] = useState([])
  
  useEffect(() => {
    setData([])
    if(!props.data){
      for(i = 2; i < Object.keys(props.options).length; i++) {
        const value = String(i);
        setData(oldArray => [...oldArray, {
          item: props.options[value].key,
          id: props.options[value].name,
        }])
      }
    }else{
      setData(props.data)
    }

  }, []);

  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>
          <HStack alignItems="baseline">
            <Heading fontSize="lg">SelectBox</Heading>
          </HStack>
          <SelectBox
            options={data}
            value={selected}
            onChange={val => {
              setSelected(val);
              props.valueChange(val.id);
            }}
            arrowIconColor={'black'}
            searchIconColor={'black'}
            toggleIconColor={'black'}
            hideInputFilter={true}
            labelStyle={{display: 'none'}}
          />
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
  function onChange() {
    return val => setSelectedTeam(val);
  }
};

export default SelectBoxComponent;
