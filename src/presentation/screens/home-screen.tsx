import * as React from 'react';
import { Text, View } from 'react-native';
import { useAuth } from '../../contexts/auth-context';
import Button from '../components/Button';

interface HomeScreenProps {
    navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const { user, login, logout } = useAuth();
    return (
        <View style={{margin: 10, flex: 1, flexDirection: 'column'}}>
            {user ? (
                <>
                    <Text style={{flex: 1}}>Welcome, {user.username}!</Text>
                    <View>
                        <Button
                            onPress={() =>
                                navigation.navigate('Profile')
                            }
                        >
                            <Text>View Profile</Text>
                        </Button>

                        <Button
                            title="View Demo"
                            onPress={() =>
                                navigation.navigate('Demo')
                            }
                        >
                            <Text>View Demo</Text>
                        </Button>

                    </View>
                    <Button onPress={logout}>
                        <Text>Logout</Text>
                    </Button>
                </>
            ) : (
                <>
                    <Text style={{flex: 1}}>Welcome Guest</Text>
                    <Button title="Login" onPress={() => login('example', 'password')}>
                        <Text>Log in</Text>
                    </Button>
                </>
            )}
        </View>
    );
};

export { HomeScreen };