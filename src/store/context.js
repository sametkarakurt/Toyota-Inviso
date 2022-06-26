import React, {createContext, useState} from 'react';
import DeviceInfo from 'react-native-device-info';
export const Context = createContext({
  offlineMod: false,
  deviceID: '',
  language: 'tr',
  toggleOfflineMod: () => {},
});

function ContextProvider({children}) {
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
  const [deviceID, setDeviceID] = useState(exp2);
  const [language, setLanguage] = useState('tr');

  function toggleOfflineMod() {
    setOfflineMod(offlineMod === false ? true : false);
  }

  function changeLanguage(language) {
    setLanguage(language);
  }

  const value = {
    mod: offlineMod,
    language: language,
    toggleOfflineMod: toggleOfflineMod,
    deviceID: deviceID,
    changeLanguage: changeLanguage,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default ContextProvider;
