import {Text, View, Image} from "react-native";
import {s} from "../components/styles";
import IconButton from "../components/IconButton";
import {StatusBar} from "expo-status-bar";
import Footer from "../components/Footer";
import React from "react";

export default function TrainerPage({route, navigation}) {
    return (
        <View style={s.container}>
            <View style={[s.width_100, s.pb_10, s.pl_10]}>
                <Text style={[s.text, s.textTitle, s.textLeft, s.textOutline]}>
                    Your trainer:
                </Text>
            </View>
            <View style={[s.image_container]}>
                <Image source={require('../assets/images/alexth.png')} style={s.image}/>
            </View>
            <View style={[s.width_100, s.pb_10]}>
                <Text style={[s.text, s.textCenter, s.textItalic]}>
                    Alex T.H.
                </Text>
            </View>
            <IconButton icon="phone" family="FontAwesome5" label="Call me!"/>
            <IconButton icon="chat" family="MaterialCommunityIcons" label="Chat with me!"/>
            <IconButton icon="calendar" family="FontAwesome" label="Schedule a session!"/>
            <StatusBar style="light" />
            <Footer navigation={navigation} route={route}/>
        </View>
    );
}