import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { AppearanceProvider, Appearance, useColorScheme } from 'react-native-appearance'
import { View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { firebase } from './src/firebase/config'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme, } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const scheme = useColorScheme();

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
        setUser(null)
      }
    });
  }, []);

  if (loading) {
    return (
      <></>
    )
  }

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme ==='dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          { user ? (
            <Stack.Screen name="Home">
              {props => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registration" component={RegistrationScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
