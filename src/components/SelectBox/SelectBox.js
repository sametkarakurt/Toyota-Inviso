import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
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
const K_OPTIONS = [
  {
    item: 'Female',
    id: 'female',
  },
  {
    item: 'Male',
    id: 'male',
  },
];
const SelectBoxComponent = props => {
  const [selectedTeam, setSelectedTeam] = useState({});

  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>
          <HStack alignItems="baseline">
            <Heading fontSize="lg">Select</Heading>
          </HStack>
          <SelectBox
            options={K_OPTIONS}
            value={selectedTeam}
            onChange={val => {
              setSelectedTeam(val);
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
