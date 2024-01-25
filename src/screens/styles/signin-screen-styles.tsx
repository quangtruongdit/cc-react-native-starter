import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type ISignInStyles = {
    changeLanguageContent: ViewStyle;
    languageItem: ViewStyle;
    forgotPassword: ViewStyle;
    row: ViewStyle;
    forgot: TextStyle;
    link: TextStyle;
};

export const styles = StyleSheet.create<ISignInStyles>({
    changeLanguageContent: {
        flexDirection: 'row',
        position: 'absolute',
        top: 20,
        right: 0,
    },
    languageItem: {
        padding: 5,
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
    },
    link: {
        fontWeight: 'bold',
        color: 'gray',
    },
});