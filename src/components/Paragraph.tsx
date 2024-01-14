import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

export default function Paragraph() {
    return <Text style={styles.text} />;
}

type IParagraphStyles = {
    text: TextStyle;
};

const styles = StyleSheet.create<IParagraphStyles>({
    text: {
        fontSize: 15,
        lineHeight: 21,
        textAlign: 'center',
        marginBottom: 12,
    },
});
