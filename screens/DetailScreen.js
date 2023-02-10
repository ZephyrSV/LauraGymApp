import {styles} from "../styles";
import {View, Text} from "react-native";

export default function DetailScreen({route, navigation}) {
    const qrdata = route.params.qrdata;
    const machines = ['Treadmill', 'Elliptical', 'Stationary Bike', 'Rowing Machine', 'Smith Machine', 'Leg Press', 'Cable Machine', 'Lat Pulldown', 'Chest Press', 'Seated Row']
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.textTitle]}>Detail Screen</Text>
            <Text style={[styles.text, styles.textTitle]}>{qrdata}</Text>
        </View>
    );
}