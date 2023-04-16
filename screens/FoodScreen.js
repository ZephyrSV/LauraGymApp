import {View, Text, Image, Pressable,} from "react-native";
import Footer from "../components/Footer";
import * as React from "react";
import {s, black, cyan, dark_cyan} from "../components/styles";
import {StatusBar} from "expo-status-bar";
import IconButton from "../components/IconButton";
import CircleDial from "../components/circleDial";


export default function FoodScreen({navigation, route}) {
    const caloriesConsumed = 2000;
    const caloriesGoal = 2500;

    const mealsOfTheDay = [
        {
            key: "1",
            label: "Breakfast",
            Icon: "egg-fried",
            IconFamily: "MaterialCommunityIcons",
        },
        {
            key: "2",
            label: "Lunch",
            Icon: "food-variant",
            IconFamily: "MaterialCommunityIcons",
        },
        {
            key: "3",
            label: "Dinner",
            Icon: "carrot",
            IconFamily: "FontAwesome5",
        }
    ];
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

    return (
        <View style={s.container}>
            <View style={[s.width_100, s.pb_10, s.blackLine]}>
                <Text style={[s.text, s.textTitle, s.textOutline]}>
                    Diary
                </Text>
            </View>
            <View style={[s.width_100]}>
                <View style={[s.elementRow]}>
                    <Pressable style={[s.bg_cyan, s.p_10, s.borderBlack, s.borderRB]}>
                        <Text style={[s.text, s.textOutline, s.white]}>Yesterday</Text>
                    </Pressable>
                    <Text style={[s.text, s.textCenter, s.textItalic, s.p_10]}>
                        Today
                    </Text>
                    <Pressable style={[s.bg_cyan, s.p_10, s.borderBlack, s.borderLB]}>
                        <Text style={[s.text, s.textOutline, s.white]}>Tomorrow</Text>
                    </Pressable>
                </View>
            </View>
            <CircleDial fillPercentage={90} size={200} label="Calories">
                <Text style={[s.textOutline, {fontSize: 50}]} >{caloriesConsumed}</Text>
                <Text style={{ textAlign: 'center', fontSize: 20, paddingBottom: 10, fontStyle: 'italic' }}>calories consumed</Text>
                <Text style={{ textAlign: 'center', fontSize: 20}}>Goal:</Text>
                <Text style={[{color: dark_cyan, fontSize: 30, fontWeight:'600'}]} >{caloriesGoal}</Text>
            </CircleDial>

            <View style={[s.width_100, s.blackLine]}>
                <Text style={[s.text, s.textTitle, s.textOutline, s.textLeft, s.pl_10]}>
                    Recipes
                </Text>
            </View>

            {mealsOfTheDay.map((meal) => (
                <IconButton key={meal.key} icon={meal.Icon} family={meal.IconFamily} label={meal.label}
                            buttonStyle={bottom_buttons_buttonStyle} iconStyle={bottom_buttons_iconStyle}
                />
            ))}


            <StatusBar style="light" />
            <Footer navigation={navigation} route={route}/>
        </View>
    );
}