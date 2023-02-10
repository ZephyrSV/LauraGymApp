import {View,Text} from "react-native";
import {StatusBar} from "expo-status-bar";

import {styles} from "../styles";
export default function HomeScreen({route, navigation}) {

    return (
        <View style={styles.container}>
            <View style={styles.element}>
                <View style={styles.elementRow}>
                    <Text style={[styles.text,styles.textTitle]}>
                        {"Hello "}
                    </Text>
                    <Text style={[styles.text,styles.textTitle]}>
                        {route.params.user}
                    </Text>
                </View>
            </View>
            <View style={styles.element}>
                <View style={styles.elementRow}>
                    <Text style={[styles.text,styles.textTitle]}>
                        This is a test
                    </Text>
                </View>
            </View>



            <Text style={styles.text}>Home Screen from a different file</Text>
            <StatusBar style="light" />
        </View>
    );
}

