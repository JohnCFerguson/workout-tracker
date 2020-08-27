import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, TouchableHighlight, View, Modal, Alert } from 'react-native'
import { AppearanceProvider, Appearance, useColorScheme } from 'react-native-appearance'
import { useTheme } from '@react-navigation/native'
import { Card } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'
import { firebase } from '../../../../../../firebase/config'
import styles from './styles';

export default function WorkoutsHome(props) {

    const { colors } = useTheme();

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [workoutName, setWorkoutName] = useState('')

    const entityRef = firebase.firestore().collection('entities')
    const userID = props.extraData.id
    const navigation = props.navigation

    useEffect(() => {
        entityRef
            .where("authorID", "==", userID)
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        newEntities.push(entity)
                    });
                    setEntities(newEntities)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    const onAddButtonPress = () => {
        if (workoutName && workoutName.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                text: workoutName,
                authorID: userID,
                createdAt: timestamp,
            };
            entityRef
                .add(data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        }
        setModalVisible(false);
    }



    const renderEntity = ({item, index}) => {
        const title = item;

        return (
            <View>
                <TouchableOpacity onPress={() => {props.navigation.navigate(item.text)}}>
                    <Card containerStyle={[{backgroundColor: colors.border}, styles.cardContainer]}>
                    {/*react-native-elements Card*/}
                        <Text style={{color: colors.text}}>
                            {item.text}
                        </Text>
                    </Card>
                </TouchableOpacity>
            </View>
        )
    }

    const workoutModal = () => {
        return (
            <View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
              >
                <View style={styles.centeredView}>
                    <View style={[{backgroundColor: colors.border}, styles.modalView]}>
                        <TextInput
                            style={styles.input}
                            placeholder='Workout Name'
                            placeholderTextColor="#aaaaaa"
                            onChangeText={(text) => {setWorkoutName(text)}}
                            value={workoutName}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                        />
                        <LinearGradient
                            colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                            style={styles.modalGradient}
                            >
                                <TouchableHighlight style={[{backgroundColor: colors.border}, styles.modalButton]} onPress={onAddButtonPress}>
                                    <Text style={[{color: colors.text}, styles.buttonText]}>Done</Text>
                                </TouchableHighlight>
                        </LinearGradient>
                    </View>
                </View>
              </Modal>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            { workoutModal() }
            { entities && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                    <View style={styles.formContainer}>
                        <LinearGradient
                            colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                            style={styles.gradient}
                            >
                                <TouchableHighlight style={[{backgroundColor: colors.border}, styles.button]} onPress={() => setModalVisible(true)}>
                                    <Text style={{color: colors.text}}>Add Workout</Text>
                                </TouchableHighlight>
                        </LinearGradient>
                    </View>
                </View>
            )}
        </View>
    );
}