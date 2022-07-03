import {border} from 'native-base/lib/typescript/theme/styled-system';
import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, View, Pressable} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  Checkbox,
  Heading,
  HStack,
  VStack,
  Text,
  Box,
  Center,
  NativeBaseProvider,
  Input,
} from 'native-base';
const DateComponent = props => {
  const [pickerMode, setPickerMode] = useState(null);
  const [inline, setInline] = useState(false);
  const [date, setDate] = useState(props.formData.dateComponent);

  const showDatePicker = () => {
    setPickerMode('date');
  };

  const hidePicker = () => {
    setPickerMode(null);
  };

  const handleConfirm = date => {
    // In order to prevent the double-shown popup bug on Android, picker has to be hidden first (https://github.com/react-native-datetimepicker/datetimepicker/issues/54#issuecomment-618776550)
    hidePicker();
    var tempDate = JSON.stringify(date);
    var year = '';
    var month = '';
    var day = '';
    for (i = 1; i < 5; i++) {
      year += tempDate[i];
    }

    for (i = 6; i < 8; i++) {
      month += tempDate[i];
    }

    for (i = 9; i < 11; i++) {
      day += tempDate[i];
    }

    day = String(day);

    var tempDate = day + '-' + month + '-' + year;
    setDate(tempDate);

    props.valueChange(tempDate);
  };

  return (
    <NativeBaseProvider>
      <Box marginBottom={5}>
        <VStack space={2}>
          <HStack alignItems="baseline">
            <Heading fontSize="lg">Date</Heading>
          </HStack>
          <Pressable onPress={showDatePicker}>
            <View pointerEvents="none">
              <Input h="9" backgroundColor={'white'} placeholder={date} />
            </View>
          </Pressable>
          <DateTimePickerModal
            isVisible={pickerMode !== null}
            mode={pickerMode}
            onConfirm={handleConfirm}
            onCancel={hidePicker}
            display={inline ? 'inline' : undefined}
          />
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

const style = StyleSheet.create({
  kara: {
    backgroundColor: 'red',
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inlineSwitchContainer: {
    marginTop: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inlineSwitchText: {
    fontSize: 18,
    marginRight: 8,
  },
});

export default DateComponent;
