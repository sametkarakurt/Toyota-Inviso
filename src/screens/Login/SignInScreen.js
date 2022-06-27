import * as React from 'react';
import {AuthContext} from '../utily';
import 'react-native-gesture-handler';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Alert,
} from 'react-native';

import DeviceId from '../../../pages/DeviceId';
import {useTranslation} from 'react-i18next';

import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'Sending `onAnimatedValueUpdate` with no listeners registered.',
]);

export function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = React.useContext(AuthContext);

  const {t, i18n} = useTranslation();

  function handleSubmit() {
    signIn({username, password});
  }
  return (
    <View style={styles.container}>
      <DeviceId />
      <Image
        source={require('/Users/sametkarakurt/myProject/images/logo3.png')}
        style={styles.backImage}
      />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder={t('username')}
          autoFocus={true}
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder={t('password')}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>
            {t('login')}
          </Text>
        </TouchableOpacity>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />

        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15}}>© 32bit Bilgisayar Hizmetleri </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    paddingBottom: 24,
  },
  input: {
    backgroundColor: '#F6F7FB',
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: '100%',
    position: 'absolute',
    top: (Dimensions.get('window').height * 65) / 844,
  },
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#A72325',
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
    marginTop: 50,
  },
  button: {
    backgroundColor: 'black',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
});
