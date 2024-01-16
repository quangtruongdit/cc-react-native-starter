import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ListItemProps {
  item: {
    title: string;
    body: string;
    imageUrl: string; // Adjust the property name based on your data structure
  };
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
    const placeholderImage = require('../assets/images/logo.png'); // Replace with your placeholder image

  return (
    <View style={styles.listItem}>
      <Image
        source={item.imageUrl ? { uri: item.imageUrl } : placeholderImage}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Title: {item.title}</Text>
        <Text style={styles.body}>{item.imageUrl}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  image: {
    width: 50, // Adjust the width as needed
    height: 50, // Adjust the height as needed
    borderRadius: 25, // Assuming you want a circular image
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  },
});

export default ListItem;
