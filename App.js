import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, ScrollView } from 'expo-status-bar';
import { NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Header from './components/Header';
import Home from './screens/Home';
import Friends from './screens/Home';
import Groups from './screens/Groups';
import Profile from './screens/Profile';
import Notification from './screens/Notification';
import Menu from './screens/Menu';

const Tab = createMaterialTopTabNavigator()

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

<NavigationContainer>
  <Tab.Navigator
    swipeEnabled = 'true'
    tabBarOptions={{
      showIcon: true,
      showLabel: false,
      activeTintColor: '#3a86e9',
      inactiveTintColor: '#9F9F9F',

    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({getFocusedRouteNameFromRoute, color, size}) =>{
        let iconName;
        if(route.name === 'Home') iconName = 'home'
        else if(route.name === 'Friends') iconName = 'account-multiple-outline'
        else if(route.name === 'Groups') iconName = 'account-group'
        else if(route.name === 'Profile') iconName = 'account-circle-outline'
        else if(route.name === 'Notification') iconName = 'bell-outline'
        else if(route.name === 'Menu') iconName = 'menu'
        return <MaterialCommunityIcons name = {iconName} size={26} color={color} />
    
        },
    })}
  >
  <Tab.Screen name = "Home" component={Home} />
  <Tab.Screen name = "Friends" component={Friends} />
  <Tab.Screen name = "Groups" component={Groups} />
  <Tab.Screen name = "Profile" component={Profile} />
  <Tab.Screen name = "Notifications" component={Notification} />
  <Tab.Screen name = "Menu" component={Menu} />
  </Tab.Navigator>
</NavigationContainer>


export default App