import {styles} from "../styles";
import {View, Text} from "react-native";

export default function DetailScreen({route, navigation}) {
    const qrdata = route.params.qrdata;
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.textTitle]}>{qrdata}</Text>
        </View>
    );
}