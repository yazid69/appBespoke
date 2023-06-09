import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/views/HomePage';
import Inscription from './src/views/Inscription';
import ParcoursDeRecherche from './src/views/ParcoursDeRecherche';
import Profile from './src/views/Profile';
import Article from './src/views/Article';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";


export default function App() {
  const Stack = createStackNavigator();

  useEffect(() => {
    const setAuthToken = async () => {
      // Récupérer le jeton d'authentification du stockage local
      const authToken = await AsyncStorage.getItem("authToken");
      // Configurer Axios pour utiliser le jeton d'authentification
      if (authToken) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
      } else {
        delete axios.defaults.headers.common["Authorization"];
      }
    };
    setAuthToken();
  }, []);




  return (
      <NavigationContainer>
    {/* <View style={styles.container}> */}
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Inscription" component={Inscription} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Article" component={Article} />
        </Stack.Navigator>
     <StatusBar style="auto" />
    {/* </View> */}
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/HomePage';
import Inscription from './src/Inscription';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Inscription" component={Inscription} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/