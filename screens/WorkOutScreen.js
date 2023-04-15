import {View, Text} from "react-native";
import {StatusBar} from "expo-status-bar";

import {s} from "../components/styles";
import IconButton from "../components/IconButton";
import Footer from "../components/Footer";
import * as React from "react";

export default function WorkOutScreen({route, navigation}) {
    return (
        <View style={s.container}>
            <View style={s.element}>
                <Text style={[s.text,s.textTitle, s.textOutline]}>
                    Hello {route.params.user}!
                </Text>
            </View>
            <IconButton icon="qrcode" label="Scan QR" OnPress={() => navigation.navigate("QrCode")}/>
            <IconButton icon="linechart" label="My progress" OnPress={() => alert("This feature is currently being developed")}/>
            <StatusBar style="light" />
            <Footer navigation={navigation} route={route}/>
        </View>
    );
}

