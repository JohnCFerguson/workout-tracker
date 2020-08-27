import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, TouchableHighlight, View, Modal, Alert } from 'react-native'
import { Card } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'
import { firebase } from '../../../../../../firebase/config'
import styles from './styles';

export default function WorkoutsHome(props) {

    const [entityText, setEntityText] = useState('')
    const [workouts, setWorkouts] = useState([])
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [exerciseName, setExerciseName] = useState('')
    const [weeks, setWeeks] = useState({})
    const [days, setDay] = useState({})

    const userID = props.extraData.id
    const workoutID = props.id
    const navigation = props.navigation

    const entityRef = firebase.firestore().collection('entities').doc(workoutID)
    const exerciseRef = firebase.firestore().collection('exercises')

    async function _getWorkoutData() {
            try{
                let obj = {}
                await entityRef.get().then(doc => {
                    for (const [key, value] of Object.entries(doc.data())) {
                        
                        if(key != 'authorID' && key != 'text' && key != 'createdAt')
                            obj[key] =  value;
                      }

                      setWeeks(obj)
                })
            }
            catch (err) {
                console.log(err);
            }
    }

    useEffect(() => {
        entityRef.get().then(doc => {
            let obj = {}
            for (const [key, value] of Object.entries(doc.data())) {
                
                if(key != 'authorID' && key != 'text' && key != 'createdAt')
                    weeks[key] =  value;
              }
              console.log(weeks)
        })
        error => {
            console.log(error)
        }
    }, [])

    const onAddButtonPress = () => {
        setExerciseName('test')
        alert(exerciseName + " " + workoutID)
        if (exerciseName && exerciseName.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                exercise: exerciseName,
                authorID: userID,
                createdAt: timestamp,
            };
            exerciseRef
                .add(data)
                .then(_doc => {
                    setExerciseName('')
                    setSets('')
                    setExerciseID(_doc.id)
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
            alert(exerciseID)
            const workoutData = {
                workoutID: workoutID,
                exerciseID: exerciseID,
            }
            workoutRef
                .add(workoutData)
        }
        setAddModalVisible(false);
    }



    const renderEntity = ({item, index}) => {
        return (
            <View>
                <TouchableOpacity onPress={() => {props.navigation.navigate(item)}}>
                    <Card containerStyle={styles.cardContainer}>
                    {/*react-native-elements Card*/ console.log(item)}
                        <Text style={styles.card}>
                            {item}
                        </Text>
                    </Card>
                </TouchableOpacity>
            </View>
        )
    }

    const addModal = () => {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={addModalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <LinearGradient
                                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                                style={styles.modalGradient}
                                >
                                    <TouchableHighlight style={styles.modalButton} onPress={() => setAddModalVisible(false)}>
                                        <Text style={styles.buttonText}>Add Exercise</Text>
                                    </TouchableHighlight>
                            </LinearGradient>
                            <LinearGradient
                                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                                style={styles.modalGradient}
                                >
                                    <TouchableHighlight style={styles.modalButton} onPress={() => setAddModalVisible(false)}>
                                        <Text style={styles.buttonText}>Add Day</Text>
                                    </TouchableHighlight>
                            </LinearGradient>
                            <LinearGradient
                                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                                style={styles.modalGradient}
                                >
                                    <TouchableHighlight style={styles.modalButton} onPress={onAddButtonPress}>
                                        <Text style={styles.buttonText}>Add Week</Text>
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
            { addModal() }
            { weeks && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={Object.keys(weeks)}
                        renderItem={renderEntity}
                        keyExtractor={(key) => key}
                        removeClippedSubviews={true}
                    />
                </View>
            )}
            <View style={styles.formContainer}>
                <LinearGradient
                    colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                    style={styles.gradient}
                >
                        <TouchableHighlight style={styles.button} onPress={() => setAddModalVisible(true)}>
                            <Text style={styles.buttonText}>Add Workout</Text>
                        </TouchableHighlight>
                </LinearGradient>
            </View>
        </View>
    );
}