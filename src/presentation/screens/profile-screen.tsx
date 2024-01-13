import { Button, Text, View } from "react-native";
import { useAuth } from "../../contexts/auth-context";

interface ProfileScreenProps {
    navigation: any; // You can replace 'any' with a more specific type if available
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
    const { user, login, logout } = useAuth();

    return (
        <View>
            {user ? (
                <>
                    <Button
                        title="Back Home"
                        onPress={() =>
                            navigation.navigate('Home')
                        }
                    />
                </>
            ) : (
                <>
                    <Text>Please log in</Text>
                    <Button title="Login" onPress={() => login('exampleUser', 'password')} />
                </>
            )
            }
        </View>
    );
};

export { ProfileScreen };