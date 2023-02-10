/** Made by Zephyr Serret Verbist
 *  You are free to copy my code
 *  keep in mind this is my first real go at making an app...
 */
import {Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/HomeScreen";

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#343434',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
            <Stack.Screen name="Home" component={HomeScreen} initialParams={{user: "Laura"}}/>
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
