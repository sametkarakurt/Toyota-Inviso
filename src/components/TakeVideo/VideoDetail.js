import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import {
  NativeBaseProvider,
  Radio,
  HStack,
  Heading,
  Button,
  Box,
  Center,
  VStack,
} from 'native-base';
import VideoPlayer from 'react-native-video-player';
import {useNavigation} from '@react-navigation/native';
const VideoDetail = props => {
  const navigation = useNavigation();
  useEffect(() => {}, []);

  const saveData = () => {
    props.route.params.func(props.route.params.uri);
    if (props.route.params.type == 'select') {
      navigation.pop(3);
    } else {
      navigation.pop(2);
    }
  };

  const removeData = () => {
    if (props.route.params.type == 'select') {
      navigation.pop(3);
    } else {
      navigation.pop(2);
    }
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Center backgroundColor={'#E8EAED'} marginTop={'30%'}>
          <Box marginTop={5} minW="90%" maxW="90%" h="100%">
            {props.route.params.uri && (
              <VideoPlayer
                video={{
                  uri: props.route.params.uri,
                }}
                videoWidth={1600}
                videoHeight={900}
              />
            )}

            <HStack marginTop={50} w="100%" justifyContent={'space-between'}>
              <Button
                w="45%"
                colorScheme="red"
                onPress={() => {
                  removeData();
                }}>
                SİL
              </Button>
              <Button
                w="45%"
                colorScheme="success"
                onPress={() => {
                  saveData();
                }}>
                KAYDET
              </Button>
            </HStack>
          </Box>
        </Center>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default VideoDetail;
