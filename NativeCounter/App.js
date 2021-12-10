import React from 'react';
import {StyleSheet} from 'react-native';
import Counter from './Counter';

function App() {
  return <Counter style={styles.block} />;
}

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default App;
