import {View, Text, Button} from "react-native";
import {StatusBar} from "expo-status-bar";

import {s} from "../components/styles";
import IconButton from "../components/IconButton";
export default function HomeScreen({route, navigation}) {
    return (
        <View style={s.container}>
            <View style={s.element}>
                <Text style={[s.text,s.textTitle]}>
                    Hello {route.params.user}!
                </Text>
            </View>
            <Button title="Login" onPress={() => navigation.navigate("Login")}/>
            <IconButton icon="qrcode" label="Scan QR" OnPress={() => navigation.navigate("QrCode")}/>
            <IconButton icon="linechart" label="My progress" OnPress={() => alert("This feature is currently being developed")}/>
            <StatusBar style="light" />
        </View>
    );
}

