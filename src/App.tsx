import React from 'react';
import {SafeAreaView} from 'react-native';
import Toast from 'react-native-toast-message';

import {HomeScreen} from './screens';

export default function App() {
  return (
    <SafeAreaView>
      <HomeScreen />
      <Toast />
    </SafeAreaView>
  );
}
