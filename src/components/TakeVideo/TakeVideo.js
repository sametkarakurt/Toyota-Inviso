'use strict';

import React, {useRef, useContext} from 'react';

import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import {
  NativeBaseProvider,
  HStack,
  Switch,
  Divider,
  Text,
  VStack,
  Heading,
  Box,
} from 'native-base';
import styles from './styles';

import VideoRecorder from 'react-native-beautiful-video-recorder';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Context} from '../../store/context';
const TakeVideo = props => {
  const cameraRef = useRef(null);
  const navigation = useNavigation();
  const context = useContext(Context);
  const start = async () => {
    // 30 seconds
    cameraRef.current.open(
      {maxLength: 30, quality: context.cameraResolution},
      data => {
        navigation.navigate('VideoDetail', {
          func: props.route.params.func,
          uri: data.uri,
          type: 'take',
        });
      },
    );
  };

  return (
    <NativeBaseProvider>
      <View>
        <VideoRecorder ref={cameraRef} />

        <Box>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => start()}>
              <View style={styles.item}>
                <Text fontSize="md">Video Çek</Text>
                <Entypo name="chevron-right" size={20} />
              </View>
            </TouchableOpacity>
            <Divider my="2" />
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('SelectVideo', {
                  func: props.route.params.func,
                });
              }}>
              <View style={styles.item}>
                <Text fontSize="md">Galeriden Seç</Text>
                <Entypo name="chevron-right" size={20} />
              </View>
            </TouchableOpacity>
            <Divider my="2" />
          </View>
        </Box>
      </View>
    </NativeBaseProvider>
  );
};

export default TakeVideo;
