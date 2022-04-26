import DeviceInfo from 'react-native-device-info';
export default function (state, action) {
  switch (action.type) {
    case 'GET_ID':
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
      return {uniqueID: exp2};

    default:
      return state;
  }
}
