import React, {useState} from 'react';
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
const K_OPTIONS = [
  {
    item: 'Denizli',
    id: '0',
  },
  {
    item: 'İstanbul',
    id: '1',
  },
];

const MultiSelect = props => {
  const [selected, setSelected] = useState([]);
  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>
          <HStack alignItems="baseline">
            <Heading fontSize="lg">Multi Select</Heading>
          </HStack>
          <SelectBox
            options={K_OPTIONS}
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
