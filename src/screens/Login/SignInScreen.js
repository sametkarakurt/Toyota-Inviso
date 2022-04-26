import * as React from 'react';
import {AuthContext} from '../utily';
import 'react-native-gesture-handler';
import {useState} from 'react';
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
  Body,
  Button,
  CheckBox,
  Input,
  Item,
  Label,
  ListItem,
  Text,
  Icon,
  Center,
  Box,
  VStack,
  FormControl,
} from 'native-base';
import DeviceId from '../../../pages/DeviceId';
export function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = React.useContext(AuthContext);

  function handleSubmit() {
    signIn({username, password});
  }
  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <DeviceId />
          <Image
            source={require('/Users/sametkarakurt/Desktop/toyotaInviso/images/logo3.png')}
          />

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Username</FormControl.Label>
              <Input onChange={text => setUsername(text)} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" onChange={text => setPassword(text)} />
            </FormControl>
            <Button mt="2" colorScheme="green" onPress={handleSubmit}>
              Giriş
            </Button>
            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                marginTop: 5,
                marginBottom: 5,
              }}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 10}}>© 32bit Bilgisayar Hizmetleri </Text>
            </View>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}