import { Text, View } from "react-native";
import { useAuth } from "../contexts/auth-context";
import Button from "../components/Button";

interface ProfileScreenProps {
    navigation: any; }

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
    const { user, login, logout } = useAuth();

    return (
        <View style={{margin: 10, flex: 1, flexDirection: 'column'}}>
            {user ? (
                <>
                    <Text style={{flex: 1}}>Welcome, {user.username}!</Text>
                    <View>
                        <Button
                            onPress={() =>
                                navigation.navigate('Home')
                            }
                        >
                            <Text>Switch to Home</Text>
                        </Button>

                        <Button title="Logout" onPress={() => logout()}>
                        <Text>Log out</Text>
                    </Button>
                    </View>
                    
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

export { ProfileScreen };