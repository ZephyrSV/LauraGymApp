import {useState} from "react";
import {TextInput, View, Text } from "react-native";
import {s} from "../components/styles";


export default function LoginScreen(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={s.container}>
            <Text style={[s.text, s.textTitle]}>Login</Text>
            <View style={s.element}>
                <TextInput
                    style={s.text}
                    placeholder="Username"
                    onChangeText={text => setUsername(text)}
                    value={username}
                />
            </View>
            <View style={s.element}>
                <TextInput
                    style={s.text}
                    placeholder="Password"
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
            </View>
        </View>
);
}