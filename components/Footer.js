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
                OnPress={() => {
                    navigation.popToTop();
                    navigation.replace(label, {user: route.params.user}
                    )}}
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
                family={"FontAwesome5"} vertical={true}
            />
            <FooterButton
                icon={"silverware-fork-knife"}
                label={"Food"}
                family={"MaterialCommunityIcons"} vertical={true}
            />
            <FooterButton
                icon={"calendar-check-o"}
                label={"Planner"}
                family={"FontAwesome"} vertical={true}
            />
            <FooterButton
                icon={"hands-helping"}
                label={"Trainer"}
                family={"FontAwesome5"} vertical={true}
            />
            <View/>
        </View>
    );
}
