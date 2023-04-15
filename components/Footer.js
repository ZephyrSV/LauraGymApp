import {View} from "react-native";
import {s} from "./styles";
import React from "react";
import IconButton from "./IconButton";
import { useRoute } from '@react-navigation/native';

export default function Footer({route, navigation}) {

    const route1 = useRoute();
    console.log(route1.name);

    function FooterButton({icon, label, OnPress, family}){
        const route1 = useRoute();
        const textStyle = [s.text, s.footer_text, (label === route1.name ? [s.footer_selected] : null)];
        const buttonStyle = [s.colorWhite, (label === route1.name ? [s.footer_selected] : null)];
        return (
            <IconButton
                icon={icon}
                label={label}
                OnPress={OnPress}
                family={family} vertical={true}
                textStyle={textStyle}
                buttonStyle={buttonStyle}
            />
        )
    }
    return (
        <View style={[s.footer, s.elementRow]}>
            <View/>
            <FooterButton
                icon={"running"}
                label={"Workout"}
                OnPress={() => alert("This feature is currently being developed")}
                family={"FontAwesome5"} vertical={true}
                textStyle={[s.text, s.footer_text]}
            />
            <IconButton
                icon={"silverware-fork-knife"}
                label={"Food"}
                OnPress={() => alert("This feature is currently being developed")}
                family={"MaterialCommunityIcons"} vertical={true}
                textStyle={[s.text, s.footer_text]}
            />
            <IconButton
                icon={"calendar-check-o"}
                label={"Planner"}
                OnPress={() => alert("This feature is currently being developed")}
                family={"FontAwesome"} vertical={true}
                textStyle={[s.text, s.footer_text]}
            />
            <IconButton
                icon={"hands-helping"}
                label={"Trainer"}
                OnPress={() => navigation.navigate("Trainer", {user: route.params.user})}
                family={"FontAwesome5"} vertical={true}
                textStyle={[s.text, s.footer_text]}
            />
            <View/>
        </View>
    );
}
