import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, ScrollView } from 'expo-status-bar';
import Header from './components/Header';
import Home from './screens/Home';
import Friends from './screens/Home';
import Groups from './screens/Groups';
import Profile from './screens/Profile';
import Notification from './screens/Notification';
import Menu from './screens/Menu';


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

export default App