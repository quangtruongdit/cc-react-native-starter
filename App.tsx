import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { View } from 'react-native';
import { DemoScreen } from './src/presentation/screens/demo-screen';
import { HomeScreen } from './src/presentation/screens/home-screen';
import { ProfileScreen } from './src/presentation/screens/profile-screen';
import { SignInScreen } from './src/presentation/screens/signin-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{title: 'SignIn Screen'}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home Screen'}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile Screen'}}
      />
      <Stack.Screen
        name="Demo"
        component={DemoScreen}
        options={{title: 'Demo Screen'}}
      />
    </Stack.Navigator>
</NavigationContainer>
  );
};

export default App;