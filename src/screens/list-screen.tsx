// components/ApiList.tsx
import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import useApiData from '../hooks/use-api-data';
import ListItem from '../components/ListItem';

const ListScreen: React.FC = () => {
    const { apiData, loading, error } = useApiData();

    return (
        <View>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : error ? (
                <Text>Error: {error}</Text>
            ) : (
                <FlatList
                    data={apiData}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <ListItem item={{
                            title: item.title,
                            body: item.albumId.toString(),
                            imageUrl: item.thumbnailUrl
                        }}></ListItem>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        borderBottomWidth: 1,
        padding: 10,
    },
});

export default ListScreen;
