import {View} from "react-native";
import {s} from "./styles";
import React from "react";
import IconButton from "./IconButton";

export default function Footer({route, navigation}) {
    return (
        <View style={[s.footer, s.elementRow]}>
            <View/>
            <IconButton
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
