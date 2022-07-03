import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NativeBaseProvider, HStack, Heading, Box, VStack} from 'native-base';
import RadioGroup from 'react-native-radio-buttons-group';

const RadioButtonComponent = props => {
  const [value, setValue] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);

    if (props.formData.radioButtonComponent != '') {
      setData(props.formData.radioButtonComponent);
    } else {
      for (i = 2; i < Object.keys(props.options).length; i++) {
        const value = String(i);
        setData(oldArray => [
          ...oldArray,
          {
            id: props.options[value].name,
            label: props.options[value].key,
            value: props.options[value].key,
          },
        ]);
      }
    }
  }, []);

  function onPressRadioButton(radioButtonsArray) {
    props.valueChange(radioButtonsArray);
    setValue(radioButtonsArray);
  }

  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>
          <HStack alignItems="baseline">
            <Heading fontSize="lg">RadioButton</Heading>
          </HStack>

          <RadioGroup
            containerStyle={{
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
            radioButtons={data}
            onPress={onPressRadioButton}
          />
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default RadioButtonComponent;
