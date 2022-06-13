'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking
} from 'react-native';
import { withNavigation } from 'react-navigation';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import VideoRecorder from 'react-native-beautiful-video-recorder';
export default class CameraComponent extends Component {
  start = () => {
    // 30 seconds
    this.videoRecorder.open({ maxLength: 30 },(data) => {
        console.log('captured data', data);
    });
}

  render() {
    return (
      <View>

    <TouchableOpacity onPress={this.start}>
      <Text>Start</Text>
    </TouchableOpacity>
    <VideoRecorder ref={(ref) => { this.videoRecorder = ref; }} />
  </View>
    );
  }
}



AppRegistry.registerComponent('CameraComponent', () => CameraComponent);