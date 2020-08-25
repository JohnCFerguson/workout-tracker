import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Appearance, useColorScheme } from 'react-native-appearance'
import theme from './../../../../theme/theme'
import styles from './styles'

export default function ExerciseScreen(props) {

    const colorScheme = useColorScheme()

    const themeStatusBarStyle = colorScheme === 'light' ? 'dark-content' : 'light-content';
    const themeTextStyle = colorScheme === 'light' ? theme.lightThemeText : theme.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? theme.lightContainer : theme.darkContainer;


    return (
        <View style={[styles.container, themeContainerStyle]}>
            <Text style={[styles.text, themeTextStyle]}>{colorScheme}!</Text>
        </View>
    )
}
