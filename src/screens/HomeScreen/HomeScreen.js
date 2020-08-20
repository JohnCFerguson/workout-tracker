import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExerciseScreen, WorkoutScreen } from './tabs'
//import { ExerciseScreen } from './tabs/ExerciseScreen/ExerciseScreen'
//import { WorkoutScreen } from './tabs/WorkoutScreen/WorkoutScreen'

const Tab = createBottomTabNavigator();

export default function HomeScreen(props) {

    const user = props.extraData;

    return (
        <Tab.Navigator>
          <Tab.Screen name="Workouts" children={() =><WorkoutScreen {...props} />} />
          <Tab.Screen name="Exercises" children={() =><ExerciseScreen {...props} />} />
        </Tab.Navigator>
    );
}
