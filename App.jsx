import React from 'react';
/* navigation */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import firebase from 'firebase';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import { firebaseConfig } from './src/lib/firebase';

const Stack = createStackNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// console.log(firebaseConfig);

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LogIn"
          screenOptions={{
            headerStyle: { backgroundColor: '#467fd3' },
            headerTitleStyle: { color: '#fff' },
            headerTitle: 'Memo App',
            headerBackTitle: 'Back',
            headerTintColor: '#fff',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureDirection: 'horizontal',
          }}
        >
          <Stack.Screen name="List" component={MemoListScreen} />
          <Stack.Screen
            name="LogIn"
            component={LogInScreen}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
          />
          <Stack.Screen name="Create" component={MemoCreateScreen} />
          <Stack.Screen name="Detail" component={MemoDetailScreen} />
          <Stack.Screen name="Edit" component={MemoEditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
