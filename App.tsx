/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { appStore } from './src/app/appStore';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/features/splash/Splash';
import Login from './src/features/login/Login';
import DashboardLayout from './src/layouts/DashboardLayout';

const Stack = createStackNavigator();

const App = ()=>{
    return (
      <Provider store={appStore}>
          <NavigationContainer>
              <Stack.Navigator initialRouteName='splash' >
                  <Stack.Screen name="splash" component={Splash} options={{headerShown: false}} />
                  <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
                  <Stack.Screen name="dashboard" component={DashboardLayout} options={{headerShown: false}} />
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
    )
}

export default App;