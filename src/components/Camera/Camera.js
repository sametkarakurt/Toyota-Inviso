import React, { useRef } from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import {
  Checkbox,
  Heading,
  HStack,
  VStack,
  Text,
  Box,
  Center,
  NativeBaseProvider,
  Button
} from 'native-base';
const CameraComponent = props => {
    const camera = useRef(null)
    const [hasPermission, setHasPermission] = React.useState(false);
    const devices = useCameraDevices();
    const device = devices.back;
  
    React.useEffect(() => {
      (async () => {
        const status = await Camera.requestCameraPermission();
        setHasPermission(status === 'authorized');
      })();
    }, []);

    const takePhoto = async () => {
        const photo = await camera.takePhoto({
            qualityPrioritization: 'quality',
            flash: 'on',
            enableAutoRedEyeReduction: true
          })
    }

  return (
    <NativeBaseProvider>


        {device != null &&
        hasPermission && (
        <>
            <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            preset="medium"
            />
                    <Button
          w="50%"
          colorScheme="yellow"
          onPress={() => {
            takePhoto();
          }}>
          KAYDET
        </Button>
        </>)}
          
 
    </NativeBaseProvider>
  );
};

export default CameraComponent;
