import React, {useState, useEffect} from 'react';
import {VStack, Box, NativeBaseProvider, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const TakeVideoButton = props => {
  const navigation = useNavigation();
  const [imageArray, setImageArray] = useState();
  useEffect(() => {
    if (props.formData.takePhoto) {
      setImageArray(props.formData.takePhoto);
    }
  }, []);

  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>
          <Button
            colorScheme="red"
            onPress={() => {
              navigation.navigate('TakeVideo', {
                func: props.valueChange,
                setUri: props.setUri,
              });
            }}>
            Video Çek
          </Button>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default TakeVideoButton;
