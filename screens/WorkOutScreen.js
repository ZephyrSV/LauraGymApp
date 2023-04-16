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
            label: "Upper body",
            OnPress: () => alert("This feature is currently being developed")
        },
        {
            key: "2",
            image: require("../assets/images/slideshowPictures/plankmanwoman.jpg"),
            label: "Lower body",
            OnPress: () => alert("This feature is currently being developed")
        },
        {
            key: "3",
            image: require("../assets/images/slideshowPictures/dumbellswoman.jpg"),
            label: "Arm training",
            OnPress: () => alert("This feature is currently being developed")
        },
        ];

    return (
        <View style={[s.container, s.pt_80, s.pb_80]}>
            <ScrollView horizontal style={s.scrollview}>
                {scrollviewcontent.map((item, index) => (
                    <View style={s.scrollview_element}>
                        <Image source={item.image} style={s.scrollview_element_image}/>
                        <Text style={s.scrollview_element_text}>{item.label.toUpperCase()}</Text>
                    </View>
                ))}
            </ScrollView>
            <IconButton icon="qrcode" label="Scan QR" OnPress={() => navigation.navigate("QrCode")}/>
            <IconButton icon="linechart" label="My progress" OnPress={() => alert("This feature is currently being developed")}/>
            <StatusBar style="light" />
            <Footer navigation={navigation} route={route}/>
        </View>
    );
}

