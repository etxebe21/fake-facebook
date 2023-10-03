import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, ScrollView } from 'expo-status-bar';
import Header from './components/Header';

const App = () => {
  return(
    <>
    <StatusBar
      backgroundColor= "#FFFFFF"
      barStyle= "dark-content"
    />
    <ScrollView>
        <Header/>
    </ScrollView>
    </>
  );
}

export default App;