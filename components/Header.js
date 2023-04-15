import {s} from "./styles";
import {View, Text, Pressable} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header({navigation, back}){
    return (
        <View style={[s.header]}>
                {back ? <View style={s.header_button_outline}>
                    <Pressable onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name={"arrow-left"} size={32} style={s.header_button}/>
                    </Pressable>
                </View> : null}
                <Text style={[s.pl_20, s.header_text]}>My NutriGym</Text>
                <View style={s.header_button_outline}>
                    <Pressable onPress={() => navigation.navigate("Login")}>
                    <MaterialCommunityIcons name={"account-circle"} size={32} style={s.header_button}/>
                    </Pressable>
                </View>
        </View>
    );
}