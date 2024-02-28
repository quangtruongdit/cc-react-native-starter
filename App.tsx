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
import ListScreen from './src/screens/list-screen';
import { Provider } from 'react-redux';
import store from './src/stores/store';
import codePush from 'react-native-code-push';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </AuthProvider>

  );
};

const AppContent: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="List"
          component={ListScreen}
          options={{ title: 'List Screen' }}
        /> */}
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

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

// const codePushOptions = {
//   checkFrequency: codePush.CheckFrequency.ON_APP_START
// };

export default codePush(codePushOptions)(App);