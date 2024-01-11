1. Create navigation stack

```js

const Stack = createNativeStackNavigator();

<NavigationContainer>
      <Stack.Navigator>
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
```

2.Create HomeScreem


```js
import * as React from 'react';
import { Button, Text, View } from 'react-native';


interface HomeScreenProps {
    navigation: any; // You can replace 'any' with a more specific type if available
}

interface ProfileScreenProps {
    navigation: any; // You can replace 'any' with a more specific type if available
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View>
            <Button
                title="View Profile"
                onPress={() =>
                    navigation.navigate('Profile')
                }
            />
            <View style={{height: 10}}></View>
            <Button
                title="View Demo"
                onPress={() =>
                    navigation.navigate('Demo')
                }
            />
        </View>
    );
};
```

3. Create Profile Screen

```js
const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
    return (
        <Button
            title="Back Home"
            onPress={() =>
                navigation.navigate('Home')
            }
        />
    );
};

export { HomeScreen, ProfileScreen };
```