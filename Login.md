# Build login page

## SignInScreen
```js
import { FC, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import Background from "../../../components/Background";
import { styles } from "./styles";
import Logo from "../../../components/Logo";
import Button from "../../../components/Button";
import { ITextInput } from "../../../types";
import TextInput from "../../../components/TextInput";
import { useTranslation } from "react-i18next";

interface ISignInScreen {
    email: string,
    password: string
}

export const SignInScreen: FC<ISignInScreen> = ({ navigation }: any) => {
    const [email, setEmail] = useState<ITextInput>({
        value: 'eve.holt@reqres.in',
        error: '',
    });
    const [password, setPassword] = useState<ITextInput>({
        value: 'cityslicka',
        error: '',
    });

    const { t, i18n } = useTranslation();

    const onPressSignIn = async () => {

    };

    return (
        <Background>
            <View style={{ width: '100%', height: '100%', padding: 20, flex: 1, flexDirection: 'column' }}>
                <View style={{ alignContent: 'center', flex: 0.2 }}>
                    <View style={styles.changeLanguageContent}>
                        <Text
                            style={styles.languageItem}
                            onPress={() => {
                                console.log('press language');
                                console.log(i18n);
                                i18n.changeLanguage('en');
                            }}>
                            English
                        </Text>
                        <Text
                            style={styles.languageItem}
                            onPress={() => {
                                i18n.changeLanguage('vi');
                            }}>
                            Tiếng Việt
                        </Text>
                    </View>
                </View>
                <View style={{ alignContent: 'center', flex: 0.5 }}>
                    <Logo />
                    <TextInput
                        placeholder={t('Email')}
                        returnKeyType="next"
                        value={email.value}
                        onChangeText={(text: string) => setEmail({ value: text, error: '' })}
                        error={!!email.error}
                        errorText={email.error}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                    />
                    <TextInput
                        placeholder={t('Password')}
                        returnKeyType="done"
                        value={password.value}
                        onChangeText={(text: string) => setPassword({ value: text, error: '' })}
                        error={!!password.error}
                        errorText={password.error}
                        secureTextEntry
                    />
                    <View style={styles.forgotPassword}>
                        <TouchableOpacity
                            onPress={() => navigation.replace('ForgotPasswordScreen')}>
                            <Text style={styles.forgot}>{t('Forgot your password?')}</Text>
                        </TouchableOpacity>
                    </View>
                    <Button
                        mode="contained"
                        onPress={() => {
                            onPressSignIn();
                        }}>
                        <Text>{t('Login')}</Text>
                    </Button>
                    <View style={styles.row}>
                        <Text>{t('Don’t have an account?')} </Text>
                        <TouchableOpacity onPress={() => navigation.replace('SignUpScreen')}>
                            <Text style={styles.link}>{t('Sign up')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignContent: 'center', flex: 0.2 }}>

                </View>
            </View>
        </Background>
    );
}

```

## Styles

```js
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
```