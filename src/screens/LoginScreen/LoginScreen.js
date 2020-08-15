import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFooterLinkPress = () => {
        navigation.navigate('Registration');
    }

    const onLoginPress = () => {

    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShoultPersistTap='always'
            >
                <TextInput
                    style={styles.input}
                    placeholder='E-Mail'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.input}
                    placeHolderTextColor='#aaaaaa'
                    secureTextEntry
                    placeholderTextColor='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log In</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account?
                        <Text onPress={onFooterLinkPress} style={styles.foorerLink}>Sign Up</Text>
                    </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}