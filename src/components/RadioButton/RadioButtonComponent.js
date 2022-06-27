import 'react-native-gesture-handler';
import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import {
  NativeBaseProvider,
  Radio,
  HStack,
  Heading,
  Box,
  VStack,
} from 'native-base';
const RadioButtonComponent = props => {
  const [value, setValue] = React.useState('');
  const [data,setData] = useState([])
  useEffect(() => {

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
            <Heading fontSize="lg">RadioButton</Heading>
          </HStack>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={value}
            onChange={nextValue => {
              setValue(nextValue);
              props.valueChange(nextValue);
            }}>

      {data.map((item)=>{
         return  <Radio value={item.id} my={1}>
         {item.item}
       </Radio>
     })}

          </Radio.Group>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default RadioButtonComponent;
