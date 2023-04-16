/** Made by Zephyr Serret Verbist
 *  You are free to copy my code
 *  keep in mind this is my first real go at making an app...
 */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WorkoutScreen from "./screens/WorkOutScreen";
import QrCodeScreen from "./screens/QrCodeScreen";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";
import Header from "./components/Header";
import TrainerPage from "./screens/TrainerPage";
import FoodScreen from "./screens/FoodScreen";


const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Workout"
                screenOptions={{
                    header: Header,
                    headerStyle: {
                        headerSize: 70,
                    },
                    animationTypeForReplace: 'push'
                }}>
                <Stack.Screen name="Workout" component={WorkoutScreen} initialParams={{user: "[User Name]"}} options={{
                }}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name="QrCode" component={QrCodeScreen} options={{
                    unmountOnBlur: true,
                }}/>
                <Stack.Screen name="Detail" component={DetailScreen} options={{

                }} />
                <Stack.Screen name={"Trainer"} component={TrainerPage} options={{

                }}/>
                <Stack.Screen name={"Food"} component={FoodScreen} options={{

                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
