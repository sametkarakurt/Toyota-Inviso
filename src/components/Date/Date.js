import React, { useState } from "react";
import { Button, Platform, StyleSheet, Switch, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateComponent = () => {
  const [pickerMode, setPickerMode] = useState(null);
  const [inline, setInline] = useState(false);

  const showDatePicker = () => {
    setPickerMode("date");
  };

  const showTimePicker = () => {
    setPickerMode("time");
  };

  const showDateTimePicker = () => {
    setPickerMode("datetime");
  };

  const hidePicker = () => {
    setPickerMode(null);
  };

  const handleConfirm = (date) => {
    // In order to prevent the double-shown popup bug on Android, picker has to be hidden first (https://github.com/react-native-datetimepicker/datetimepicker/issues/54#issuecomment-618776550)
    hidePicker();
    console.warn("A date has been picked: ", date);
  };

  return (
    <View style={style.root}>
      <Button title="Show Date Picker" onPress={showDatePicker} />
 
      <DateTimePickerModal
        isVisible={pickerMode !== null}
        mode={pickerMode}
        onConfirm={handleConfirm}
        onCancel={hidePicker}
        display={inline ? "inline" : undefined}
      />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inlineSwitchContainer: {
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
  },
  inlineSwitchText: {
    fontSize: 18,
    marginRight: 8,
  },
});

export default DateComponent;