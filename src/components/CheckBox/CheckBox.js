import React, {useState,useEffect} from 'react';
import {
  Checkbox,
  Heading,
  HStack,
  VStack,
  Text,
  Box,
  Center,
  NativeBaseProvider,
} from 'native-base';
const CheckBox = props => {
  const [groupValue, setGroupValue] = React.useState([]);
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
            <Heading fontSize="lg">CheckBox</Heading>
          </HStack>

          <Checkbox.Group
            colorScheme="green"
            defaultValue={groupValue}
            accessibilityLabel="pick an item"
            onChange={values => {
              setGroupValue(values || []);
              props.valueChange(values);
            }}>

            {data.map((item)=>{
         return  <Checkbox value={item.id} my="1">
         {item.item}
       </Checkbox>
     })}
          </Checkbox.Group>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default CheckBox;
