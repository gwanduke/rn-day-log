import React, {useState} from 'react';
import {Button, Platform, SafeAreaView, Text, View} from 'react-native';
import ToastModule from './Toast';
import Alert from './Alert';
import * as BrightnessModule from './Brightness';

const {getBrightness, setBrightness} = BrightnessModule;

function App() {
  const [value, setValue] = useState(-1);
  const onPressBrightness = async () => {
    const brightness = await getBrightness();
    console.log(brightness);
    console.log({
      string: Alert.STRING_VALUE,
      number: Alert.NUMBER_VALUE,
    });
    setValue(brightness);
  };

  // TODO: 정상 동작 하지 않는듯하다.
  const onPressLow = () => {
    setBrightness(0.25);
  };

  // TODO: 정상 동작 하지 않는듯하다.
  const onPressHigh = () => {
    setBrightness(1);
  };

  const onPress = () => {
    if (Platform.OS === 'ios') {
      Alert.alert('Hello World');
      console.log({
        string: Alert.STRING_VALUE,
        number: Alert.NUMBER_VALUE,
      });
    }

    if (Platform.OS === 'android') {
      ToastModule.show('Hello World', ToastModule.SHORT);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Button title="Press me" onPress={onPress} />
      <>
        <View
          style={{
            flex: 1,
          }}>
          <Text>{value}</Text>
        </View>
        <Button title="Update Brightness" onPress={onPressBrightness} />
        <Button title="High Brightness" onPress={onPressHigh} />
        <Button title="Low Brightness" onPress={onPressLow} />
      </>
    </SafeAreaView>
  );
}

export default App;
