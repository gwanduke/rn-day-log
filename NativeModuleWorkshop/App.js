import React from 'react';
import {Button, Platform, SafeAreaView} from 'react-native';
import ToastModule from './Toast';
import Alert from './Alert';

function App() {
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
    </SafeAreaView>
  );
}

export default App;
