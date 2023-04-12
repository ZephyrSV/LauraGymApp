import {s} from "./styles";
import {View, Text} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header(){
    return (
        <View style={[s.header]}>
                <Text style={[s.header_text]}>My NutriGym </Text>
                <View style={s.header_button_outline}>
                    <MaterialCommunityIcons name={"account-circle"} size={32} style={s.header_button}/>
                </View>
        </View>
    );
}