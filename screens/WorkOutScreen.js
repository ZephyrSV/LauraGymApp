import {View, Text, ScrollView, Image} from "react-native";
import {StatusBar} from "expo-status-bar";

import {s} from "../components/styles";
import IconButton from "../components/IconButton";
import Footer from "../components/Footer";
import * as React from "react";

export default function WorkOutScreen({route, navigation}) {
    const scrollviewcontent = [
        {
            key: "1",
            image: require("../assets/images/slideshowPictures/legpresswoman.jpg"),
            label: "Leg training",
            OnPress: () => alert("This feature is currently being developed")
        },
        {
            key: "2",
            image: require("../assets/images/slideshowPictures/plankmanwoman.jpg"),
            label: "Abdomen training",
            OnPress: () => alert("This feature is currently being developed")
        },
        {
            key: "3",
            image: require("../assets/images/slideshowPictures/dumbellswoman.jpg"),
            label: "Arm training",
            OnPress: () => alert("This feature is currently being developed")
        },
        ];

    const bottom_buttons_iconStyle = {
        width: '90%',
        padding: 5,
        borderRadius: 10,
        margin: 0,
    }
    const bottom_buttons_buttonStyle = {
        paddingRight: 10,
        color : "white"
    }


    return (
        <View style={[s.container, s.pt_80, s.pb_80]}>
            <ScrollView horizontal style={[s.scrollview]}>
                {scrollviewcontent.map((item, index) => (
                    <View style={s.scrollview_element}>
                        <Image source={item.image} style={s.scrollview_element_image}/>
                        <Text style={s.scrollview_element_text}>{item.label.toUpperCase()}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={s.pb_10}/>
            <IconButton
                icon="qrcode"
                label="Scan QR"
                OnPress={() => navigation.navigate("QrCode")}
            />
            <View style={s.pb_10}/>
            <IconButton
                icon="arrowright"
                label="Stretching exercices"
                OnPress={() => alert("this has not beeen")}
                iconStyle={bottom_buttons_iconStyle}
                buttonStyle={bottom_buttons_buttonStyle}
            />
            <View style={s.pb_10}/>
            <IconButton
                icon="arrowright"
                label="High intensity"
                OnPress={() => alert("this has not beeen")}
                iconStyle={bottom_buttons_iconStyle}
                buttonStyle={bottom_buttons_buttonStyle}
            />
            <View style={s.pb_10}/>
            <IconButton
                icon="arrowright"
                label="Low intensity"
                OnPress={() => alert("this has not beeen")}
                iconStyle={bottom_buttons_iconStyle}
                buttonStyle={bottom_buttons_buttonStyle}
            />
            <StatusBar style="light" />
            <Footer navigation={navigation} route={route}/>
        </View>
    );
}

