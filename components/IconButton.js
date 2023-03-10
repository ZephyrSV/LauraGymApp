import {styles} from "./styles";
import {AntDesign} from "@expo/vector-icons";
import {Pressable, Text, View} from "react-native";

export default function IconButton ({ icon, label, OnPress}) {
    return (
        <Pressable style={[styles.element, styles.button]} onPress={OnPress}>
            <View style={styles.elementRow}>
                {label !== undefined ? <Text style={[styles.text]}>{label} </Text>: null}
                <AntDesign name={icon} size={32} color="#fff"/>
            </View>
        </Pressable>
    )
}