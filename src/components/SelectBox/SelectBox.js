import React, {useState, useContext} from 'react';
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

  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>
          <HStack alignItems="baseline">
            <Heading fontSize="lg">{props.title}</Heading>
          </HStack>
          <SelectBox
            options={props.data}
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
