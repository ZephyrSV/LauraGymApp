import {styles} from "../components/styles";
import {View, Text, Image} from "react-native";


export default function DetailScreen({route, navigation}) {
    const machine = route.params.machine;

    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.textTitle]}>{machine.name}{"\n"}</Text>
            <Image source={machine.icon} style={{width: 100, height: 100}}/>
        </View>
    );
}