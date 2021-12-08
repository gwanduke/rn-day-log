import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {LogContextProvider} from './contexts/LogContext';
import {SearchContextProvider} from './contexts/SearchContext';

function App() {
  return (
    <LogContextProvider>
      <SearchContextProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SearchContextProvider>
    </LogContextProvider>
  );
}

export default App;
