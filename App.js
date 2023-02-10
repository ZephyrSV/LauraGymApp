/** Made by Zephyr Serret Verbist
 *  You are free to copy my code
 *  keep in mind this is my first real go at making an app...
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/HomeScreen";
import QrCodeScreen from "./screens/QrCodeScreen";
import DetailScreen from "./screens/DetailScreen";


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
            <Stack.Screen name="Home" component={HomeScreen} initialParams={{user: "Laura"}} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="QrCode" component={QrCodeScreen} options={{
                unmountOnBlur: true,
            }}/>
            <Stack.Screen name="Detail" component={DetailScreen} options={{

            }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
