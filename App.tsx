import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { DemoScreen } from './src/screens/demo-screen';
import { ProfileScreen } from './src/screens/profile-screen';
import { SignInScreen } from './src/screens/signin-screen';
import DemoHooks from './src/screens/demo/demo-hooks';
import DemoUseContext, { FeatureComponent2 } from './src/screens/demo/demo-usecontext';
import { AuthProvider } from './src/contexts/auth-context';
import { HomeScreen } from './src/screens/home-screen';
import MainNavigator from './src/screens/navigator/main-navigator';

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
          name="Main"
          component={MainNavigator}
          options={{ title: 'ReactNativeStater' }}
        />
         <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: 'SignIn Screen' }}
        />
        {/* <Stack.Screen
          name="Demo"
          component={DemoUseContext}
          options={{ title: 'Demo Screen' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;