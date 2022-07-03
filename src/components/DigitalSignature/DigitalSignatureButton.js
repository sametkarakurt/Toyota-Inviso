import React, {useEffect} from 'react';
import {
  Heading,
  HStack,
  VStack,
  Box,
  NativeBaseProvider,
  Button,
  View,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Image, LogBox, TouchableOpacity} from 'react-native';

const DigitalSignatureButton = props => {
  const navigation = useNavigation();
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  const removeSignature = () => {
    props.valueChange('');
  };

  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>
          {props.formData.signatureComponent != '' && (
            <Box>
              <Heading marginBottom={5} fontSize="lg">
                Dijital İmza
              </Heading>
              <HStack>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: props.formData.signatureComponent,
                  }}
                />
                <TouchableOpacity
                  style={{
                    color: 'white',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginLeft: -25,
                  }}
                  onPress={removeSignature}>
                  <Ionicons name="close-circle" size={25} />
                </TouchableOpacity>
              </HStack>
            </Box>
          )}
        </VStack>
        <Button
          colorScheme="gray"
          onPress={() => {
            navigation.navigate('DigitalSignature', {func: props.valueChange});
          }}>
          Dijital İmza
        </Button>
      </Box>
    </NativeBaseProvider>
  );
};

export default DigitalSignatureButton;
const styles = StyleSheet.create({
  tinyLogo: {
    resizeMode: 'contain',
    width: '100%',
    height: 150,
    borderRadius: 10,
    backgroundColor: '#828281',
    marginBottom: 20,
  },
});
