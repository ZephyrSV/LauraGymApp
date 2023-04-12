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
import LoginScreen from "./screens/LoginScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TrainerPage from "./screens/TrainerPage";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
      // <Header/>
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
            <Stack.Screen name="Home" component={HomeScreen} initialParams={{user: "[User Name]"}} options={{
                headerShown: false,
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
                headerShown: false,
            }}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
}
