import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Counter from './Counter';

function App() {
  const [value, setValue] = useState(0);

  const onPressLeftButton = () => {
    setValue(value + 1);
  };

  const onPressRightButton = () => {
    setValue(value - 1);
  };

  return (
    <Counter
      style={styles.block}
      leftButtonText="+1"
      rightButtonText="-1"
      value={value}
      onPressLeftButton={onPressLeftButton}
      onPressRightButton={onPressRightButton}
    />
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default App;
