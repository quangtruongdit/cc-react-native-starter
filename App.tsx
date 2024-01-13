import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { DemoScreen } from './src/presentation/screens/demo-screen';
import { ProfileScreen } from './src/presentation/screens/profile-screen';
import { SignInScreen } from './src/presentation/screens/signin-screen';
import DemoHooks from './src/presentation/screens/demo/demo-hooks';
import DemoUseContext, { FeatureComponent2 } from './src/presentation/screens/demo/demo-usecontext';
import { AuthProvider } from './src/contexts/auth-context';
import { HomeScreen } from './src/presentation/screens/home-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>

  );
};

const AppContent: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Screen' }}
        />
         <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: 'SignIn Screen' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profile Screen' }}
        />
        <Stack.Screen
          name="Demo"
          component={DemoScreen}
          options={{ title: 'Demo Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;