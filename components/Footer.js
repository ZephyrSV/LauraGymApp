import {View} from "react-native";
import {s} from "./styles";
import React from "react";
import IconButton from "./IconButton";
import {StackActions, useNavigation, useRoute} from '@react-navigation/native';
import {customAnimation} from "./customAnimations";

export default function Footer() {

    const route = useRoute();
    console.log(route.name);

    function FooterButton({icon, label, OnPress, family}){
        const route = useRoute();
        const navigation = useNavigation();
        const textStyle = [s.text, s.footer_text, (label === route.name ? [s.footer_selected] : null)];
        const buttonStyle = [s.colorWhite, (label === route.name ? [s.footer_selected] : null)];
        return (
            <IconButton
                icon={icon}
                label={label}
                OnPress={() => {
                    if (label === route.name)
                        return;
                    if (navigation.canGoBack())
                        navigation.popToTop();
                    navigation.dispatch(StackActions.replace(label, {animation: customAnimation }));
                }}
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
