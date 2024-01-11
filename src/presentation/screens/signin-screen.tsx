import { FC, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import Background from "../components/Background"
import { styles } from "./styles/signin-screen-styles"
import Logo from "../components/Logo"
import TextInput from "../components/TextInput"
import Button from "../components/Button"
import { ITextInput } from "../types/text-input"


interface ISignInScreen {
    navigation: any
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
    
    function onPressSignIn() {
        console.log('On Press Sign In Button')
        console.log(email)
        console.log(password)
    }

    return(
        <Background>
            <View style={{ width: '100%', height: '100%', padding: 20, flex: 1, flexDirection: 'column' }}>
                <View style={{ alignContent: 'center', flex: 0.2 }}>
                    <View style={styles.changeLanguageContent}>
                        <Text
                            style={styles.languageItem}
                            onPress={() => {
                                console.log('press language');
                                // console.log(i18n);
                                // i18n.changeLanguage('en');
                            }}>
                            English
                        </Text>
                        <Text
                            style={styles.languageItem}
                            onPress={() => {
                                // i18n.changeLanguage('vi');
                            }}>
                            Tiếng Việt
                        </Text>
                    </View>
                </View>
                <View style={{ alignContent: 'center', flex: 0.5 }}>
                    <Logo />
                    <TextInput
                        placeholder={'Email'}
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
                        placeholder={'Password'}
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
                            <Text style={styles.forgot}>{'Forgot your password?'}</Text>
                        </TouchableOpacity>
                    </View>
                    <Button
                        mode="contained"
                        onPress={() => {
                            onPressSignIn();
                        }}>
                        <Text>{'Login'}</Text>
                    </Button>
                    <View style={styles.row}>
                        <Text>{'Don’t have an account?'} </Text>
                        <TouchableOpacity onPress={() => navigation.replace('SignUpScreen')}>
                            <Text style={styles.link}>{'Sign up'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignContent: 'center', flex: 0.2 }}>

                </View>
            </View>
        </Background>
    )
}