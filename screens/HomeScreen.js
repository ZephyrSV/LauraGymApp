import {View,Text} from "react-native";
import {StatusBar} from "expo-status-bar";

import {styles} from "../components/styles";
import IconButton from "../components/IconButton";
export default function HomeScreen({route, navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.element}>
                <Text style={[styles.text,styles.textTitle]}>
                    Hello {route.params.user}!
                </Text>
            </View>
            <IconButton icon="qrcode" label="Scan QR" OnPress={() => navigation.navigate("QrCode")}/>
            <IconButton icon="linechart" label="My progress" OnPress={() => alert("This feature is currently being developed")}/>
            <StatusBar style="light" />
        </View>
    );
}

