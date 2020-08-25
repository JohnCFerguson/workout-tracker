import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { WorkoutsHome, WorkoutContextScreen } from './screens'
import { firebase } from './../../../../firebase/config'
import { FontAwesome } from '@expo/vector-icons'
import styles from './styles'

//import { ExerciseScreen } from './tabs/ExerciseScreen/ExerciseScreen'
//import { WorkoutScreen } from './tabs/WorkoutScreen/WorkoutScreen'

const WorkoutStack = createStackNavigator();

export default function HomeScreen(props) {

    const [entities, setEntities] = useState([])

    const entityRef = firebase.firestore().collection('entities')
    const userID = props.extraData.id

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

    function workouts (item) {
        return (
            <WorkoutStack.Screen name={item.text} key={item.id}
                children={() =>
                    <WorkoutContextScreen {...props} name={item.text} id={item.id}
                        options={{
                            headerTitle: item.text,
                        }}
                    />}
            />
        )
    }

    return (
        <WorkoutStack.Navigator screenOptions={{ 
            headerShown: true,
            headerRight: () => (
                <FontAwesome.Button
                name="sign-out"
                onPress={() => firebase.auth().signOut()}
                />),
            }}
        >
          <WorkoutStack.Screen name="Workouts" children={() =><WorkoutsHome {...props} />} />
          {
            entities.map(workouts)
          }
        </WorkoutStack.Navigator>
    );
}
