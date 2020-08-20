import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExerciseScreen, WorkoutScreen } from './tabs'
//import { ExerciseScreen } from './../ExerciseScreen/ExerciseScreen'

const Tab = createBottomTabNavigator();

export default function HomeScreen(props) {

    const user = props.extraData;

    return (
        <Tab.Navigator>
          <Tab.Screen name="Workouts" component={<WorkoutScreen {...props} />} />
          <Tab.Screen name="Exercises" component={<ExerciseScreen {...props} />} />
        </Tab.Navigator>
    );
}
