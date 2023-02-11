import {styles} from "../components/styles";
import {View, Text, Image} from "react-native";
import WorkoutStopWatch from "../components/WorkoutStopWatch";
import IconButton from "../components/IconButton";


export default function DetailScreen({route, navigation}) {
    const machine = route.params.machine;

    return (
        <View style={styles.container}>
            <View style={styles.elementRow}>
                <Text style={[styles.text, styles.textTitle]}>{machine.display}</Text>
                <View style={[styles.element,{backgroundColor:"#555"}]}>
                    <Image source={machine.icon} style={{width: 100, height: 100}}/>
                </View>
            </View>
            <WorkoutStopWatch/>
            <IconButton label={"Share"} icon={"sharealt"} OnPress={() => alert("Pressed")}/>
        </View>
    );
}