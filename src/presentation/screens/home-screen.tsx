import * as React from 'react';
import { Button, Text, View } from 'react-native';


interface HomeScreenProps {
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


export {HomeScreen};