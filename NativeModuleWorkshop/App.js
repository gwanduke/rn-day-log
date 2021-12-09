import React, {useState} from 'react';
import {Button, Platform, SafeAreaView, Text, View} from 'react-native';
import ToastModule from './Toast';
import Alert from './Alert';
import {getBrightness, setBrightness} from './Brightness';

function App() {
  const [value, setValue] = useState(-1);
  const onPressBrightness = async () => {
    const brightness = await getBrightness();
    setValue(brightness);
  };

  const onPressLow = () => {
    setBrightness(0.25);
  };

  const onPressHigh = () => {
    setBrightness(1);
  };

  const onPress = () => {
    if (Platform.OS === 'ios') {
      Alert.alert('Hellow World');
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
    <SafeAreaView>
      <Button title="Press me" onPress={onPress} />
      {Platform.OS === 'android' && (
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
      )}
    </SafeAreaView>
  );
}

export default App;
