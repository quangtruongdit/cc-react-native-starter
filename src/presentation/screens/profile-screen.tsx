import { Button } from "react-native";

interface ProfileScreenProps {
    navigation: any; // You can replace 'any' with a more specific type if available
}

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

export {ProfileScreen};