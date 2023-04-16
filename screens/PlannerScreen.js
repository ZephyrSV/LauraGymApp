import {Text, View, Image} from "react-native";
import {s, cyan, dark_cyan, almost_white} from "../components/styles";
import IconButton from "../components/IconButton";
import {StatusBar} from "expo-status-bar";
import Footer from "../components/Footer";
import React, {useState} from "react";
import Calendar from "../components/Calendar";

export default function PlannerScreen({route, navigation}) {
    const heightUser = 168;
    const weightUser = 63.4;

    const bottom_buttons_iconStyle = {
        width: '90%',
        padding: 2,
        borderRadius: 10,
        margin: 2,
    }
    const bottom_buttons_buttonStyle = {
        paddingRight: 10,
        color : "white"
    }
    const [selectedDate, setSelectedDate] = useState('');


    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };


    return (
        <View style={[s.container]}>
            <View style={[s.width_90, s.pb_10, s.border, s.borderRadius_10,]}>
                <Text style={[s.text, s.textTitle, s.textLeft, s.textOutline, s.pl_10]}>
                    Progress:
                </Text>
                <View style={[s.elementRow, s.pl_10, s.pr_10]}>
                    <View>
                        <Text style={[s.text, s.textLeft, s.textItalic, s.p_10, s.pb_0]}>
                            Height: {heightUser} cm
                        </Text>
                        <Text style={[s.text, s.textLeft, s.textItalic, s.p_10, s.pb_0]}>
                            Weight: {weightUser} kg
                        </Text>
                    </View>
                    <IconButton icon="human-edit" family="MaterialCommunityIcons" label="Edit"
                                iconStyle={{padding: 10, borderRadius: 10, margin: 2,}}/>

                </View>
            </View>

            <IconButton icon="arrow-right" family="FontAwesome5" label="Previous week"
                        iconStyle={bottom_buttons_iconStyle} buttonStyle={bottom_buttons_buttonStyle}/>
            <IconButton icon="arrow-right" family="FontAwesome5" label="Next week"
                        iconStyle={bottom_buttons_iconStyle} buttonStyle={bottom_buttons_buttonStyle}/>
            <View style={[s.pb_10]}/>


            <Calendar/>

            <StatusBar style="light" />
            <Footer/>
        </View>
    );
}