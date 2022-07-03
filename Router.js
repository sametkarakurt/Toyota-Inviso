import React, {useState, useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Context} from './src/store/context';
import {SplashScreen} from './src/screens/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SignInScreen} from './src/screens/Login/SignInScreen';
import {AuthContext} from './src/screens/utily';
import {useNetInfo} from '@react-native-community/netinfo';
import HomeTabNavigator from './src/navigation/HomeTabNavigator';
import FormScreen from './src/components/Form/Form';
import ContextProvider from './src/store/context';
import LanguageScreen from './src/components/LanguageScreen/LanguageScreen';
import ScanScreen from './src/components/Scanner/Scanner';
import TakeVideo from './src/components/TakeVideo/TakeVideo';
import DigitalSignature from './src/components/DigitalSignature/DigitalSignature';
import TakePhoto from './src/components/TakePhoto/TakePhoto';
import TakePhotoButton from './src/components/TakePhoto/TakePhotoButton';
import Photo from './src/components/Photo/Photo';
import Gallery from './src/components/Gallery/Gallery';
import TakePhotoCommentButton from './src/components/TakePhotoComment/TakePhotoCommentButton';
import TakePhotoComment from './src/components/TakePhotoComment/TakePhotoComment';
import DigitalSignatureButton from './src/components/DigitalSignature/DigitalSignatureButton';
import OfflineForm from './src/components/OfflineForm/OfflineForm';
import OfflineScreen from './src/screens/Offline/OfflineScreen';
import TakeVideoButton from './src/components/TakeVideo/TakeVideoButton';
import SelectVideo from './src/components/SelectVideo/SelectVideo';
import AppSettings from './src/components/AppSettings/AppSettings';
import VideoDetail from './src/components/TakeVideo/VideoDetail';
import {ToastProvider} from 'react-native-toast-notifications';

import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);
const Stack = createStackNavigator();

export default function App({navigation}) {
  const netInfo = useNetInfo();
  const context = useContext(Context);
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      //Authentication
      signIn: async data => {
        //Has internet connection
        if (
          JSON.stringify(netInfo.isConnected) === 'false' ||
          context.mod === true
        ) {
          const username = AsyncStorage.getItem('username');
          const password = AsyncStorage.getItem('password');

          if (data.username == username && data.password == password) {
            dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});

            data.setPassword(true);
          } else {
            data.setPassword(false);
          }
        } else {
          //Has not internet connection
          if (data.username == 'sau' && data.password == 'sau') {
            AsyncStorage.setItem('username', data.username);
            AsyncStorage.setItem('password', data.password);
            dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
            data.setPassword(true);
          } else {
            data.setPassword(false);
          }
        }
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );
  //Route
  return (
    <ToastProvider>
      <AuthContext.Provider value={authContext}>
        <ContextProvider>
          <NavigationContainer>
            <Stack.Navigator>
              {state.isLoading ? (
                // We haven't finished checking for the token yet
                <Stack.Screen name="Splash" component={SplashScreen} />
              ) : state.userToken == null ? (
                // No token found, user isn't signed in
                <Stack.Screen
                  name="SignIn"
                  component={SignInScreen}
                  options={{
                    title: 'Sign in',
                    // When logging out, a pop animation feels intuitive
                    animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                    headerShown: false,
                  }}
                />
              ) : (
                // User is signed in
                <>
                  <Stack.Screen
                    name="Ana Sayfa"
                    component={HomeTabNavigator}
                    options={{headerShown: false, title: ''}}
                  />
                  <Stack.Screen
                    name="Form"
                    component={FormScreen}
                    options={{title: ''}}
                  />
                  <Stack.Screen
                    name="Language"
                    component={LanguageScreen}
                    options={{title: ''}}
                  />
                  <Stack.Screen
                    name="Scanner"
                    component={ScanScreen}
                    options={{title: ''}}
                  />
                  <Stack.Screen
                    name="TakeVideo"
                    component={TakeVideo}
                    options={{title: ''}}
                  />
                  <Stack.Screen
                    name="DigitalSignature"
                    component={DigitalSignature}
                    options={{title: ''}}
                  />
                  <Stack.Screen
                    name="TakePhoto"
                    component={TakePhoto}
                    options={{title: ''}}
                  />
                  <Stack.Screen
                    name="TakePhotoButton"
                    component={TakePhotoButton}
                    options={{title: ''}}
                  />
                  <Stack.Screen
                    name="Photo"
                    component={Photo}
                    options={{title: ''}}
                  />
                  <Stack.Screen
                    name="Gallery"
                    component={Gallery}
                    options={{title: ''}}
                  />
                  <Stack.Screen
                    name="TakePhotoCommentButton"
                    component={TakePhotoCommentButton}
                    options={{title: ''}}
                  />
                  <Stack.Screen
                    name="TakePhotoComment"
                    component={TakePhotoComment}
                    options={{title: ''}}
                  />
                  <Stack.Screen
                    name="DigitalSignatureButton"
                    component={DigitalSignatureButton}
                    options={{title: ''}}
                  />
                  <Stack.Screen
                    name="OfflineForm"
                    component={OfflineForm}
                    options={{title: ''}}
                  />
                  <Stack.Screen
                    name="OfflineScreen"
                    component={OfflineScreen}
                    options={{title: ''}}
                  />
                  <Stack.Screen
                    name="TakeVideoButton"
                    component={TakeVideoButton}
                    options={{title: ''}}
                  />
                  <Stack.Screen
                    name="SelectVideo"
                    component={SelectVideo}
                    options={{title: ''}}
                  />
                  <Stack.Screen
                    name="AppSettings"
                    options={{title: ''}}
                    component={AppSettings}
                  />
                  <Stack.Screen
                    name="VideoDetail"
                    options={{title: ''}}
                    component={VideoDetail}
                  />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </ContextProvider>
      </AuthContext.Provider>
    </ToastProvider>
  );
}
