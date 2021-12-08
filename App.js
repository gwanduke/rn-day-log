import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {LogContextProvider} from './contexts/LogContext';

function App() {
  return (
    <LogContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </LogContextProvider>
  );
}

export default App;
