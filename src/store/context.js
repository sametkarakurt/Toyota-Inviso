import React, {createContext, useState} from 'react';
import DeviceInfo from 'react-native-device-info';
import {useTranslation} from 'react-i18next';

export const Context = createContext({
  offlineMod: false,
  deviceID: '',
  username: '',
  language: 'tr',
  photoResolution: 0.4,
  cameraResolution: 0.5,
  keys: [],
  toggleOfflineMod: () => {},
  changeUsername: () => {},
});

function ContextProvider({children}) {
  const {i18n} = useTranslation();
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
  const [offlineMod, setOfflineMod] = useState(false);
  const [deviceID, setDeviceID] = useState(exp2.toUpperCase());
  const [language, setLanguage] = useState('tr');
  const [username, setUsername] = useState('');
  const [photoResolution, setPhotoResolution] = useState(0.4);
  const [cameraResolution, setCameraResolution] = useState(0.5);
  const [keys, setKey] = useState([]);

  function toggleOfflineMod() {
    setOfflineMod(offlineMod === false ? true : false);
  }
  function changePhotoResolution(value) {
    setPhotoResolution(value);
  }

  function changeCameraResolution(value) {
    setCameraResolution(value);
  }

  function changeLanguage(language) {
    setLanguage(language);
    i18n.changeLanguage(language);
  }

  function changeUsername(username) {
    setUsername(username);
  }

  function changeKey(key) {
    setKey(oldArray => [...oldArray, key]);
  }

  const value = {
    mod: offlineMod,
    language: language,
    username: username,
    changeUsername: changeUsername,
    keys: keys,
    changeKey: changeKey,
    cameraResolution: cameraResolution,
    photoResolution: photoResolution,
    toggleOfflineMod: toggleOfflineMod,
    deviceID: deviceID,
    changeLanguage: changeLanguage,
    changeCameraResolution: changeCameraResolution,
    changePhotoResolution: changePhotoResolution,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default ContextProvider;
