import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SplashScreen} from './src/screens/SplashScreen';

import {SignInScreen} from './src/screens/Login/SignInScreen';
import {AuthContext} from './src/screens/utily';
import HomeTabNavigator from './src/navigation/HomeTabNavigator';
import FormScreen from './src/components/Form/Form';
import ContextProvider from './src/store/context';
import LanguageScreen from './src/components/LanguageScreen/LanguageScreen';
import ScanScreen from './src/components/Scanner/Scanner';
import CameraComponent from './src/components/Camera/Camera';
import DigitalSignature from './src/components/DigitalSignature/DigitalSignature';
import TakePhoto from './src/components/TakePhoto/TakePhoto';
import TakePhotoButton from './src/components/TakePhoto/TakePhotoButton';
import Video from './src/components/Video/Video';
import Gallery from './src/components/Gallery/Gallery';
import TakePhotoCommentButton from './src/components/TakePhotoComment/TakePhotoCommentButton';
import TakePhotoComment from './src/components/TakePhotoComment/TakePhotoComment';
import DigitalSignatureButton from './src/components/DigitalSignature/DigitalSignatureButton';
import {LogBox} from "react-native";

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
])
const Stack = createStackNavigator();


export default function App({navigation}) {
  
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
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return (
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
                  name="Formlar"
                  component={HomeTabNavigator}
                  options={{headerShown: false}}
                />
                <Stack.Screen name="Form" component={FormScreen} />
                <Stack.Screen name="Language" component={LanguageScreen} />
                <Stack.Screen name="Scanner" component={ScanScreen} />
                <Stack.Screen name="CameraComponent" component={CameraComponent} />
                <Stack.Screen name="DigitalSignature" component={DigitalSignature} />
                <Stack.Screen name="TakePhoto" component={TakePhoto} />
                <Stack.Screen name="TakePhotoButton" component={TakePhotoButton} />
                <Stack.Screen name="Video" component={Video} />
                <Stack.Screen name="Gallery" component={Gallery} />
                <Stack.Screen name="TakePhotoCommentButton" component={TakePhotoCommentButton} />
                <Stack.Screen name="TakePhotoComment" component={TakePhotoComment} />
                <Stack.Screen name="DigitalSignatureButton" component={DigitalSignatureButton} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </AuthContext.Provider>
  );
}
