import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const DeviceId = () => {
  const [deviceId, setDeviceId] = useState('');
  useEffect(() => {
    var expression = /[^-]/g;
    var uniqueId = DeviceInfo.getUniqueId();
    var exp = uniqueId.match(expression);
    var count = 0;
    var exp2 = '';

    exp.forEach(word => {
      if (count !== 16) {
        exp2 += word;
        count++;
      }
    });
    setDeviceId(exp2);
    showUniqueId(exp2);
  }, []);

  const showUniqueId = id => {
    Alert.alert(id, [{text: 'OK', onPress: () => console.log('OK Pressed')}]);
  };
  return null;
};

export default DeviceId;
