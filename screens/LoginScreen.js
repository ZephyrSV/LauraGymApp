import {useState} from "react";
import {TextInput, View, Text} from "react-native";
import {s} from "../components/styles";
import IconButton from "../components/IconButton";


export default function LoginScreen({navigation, route}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={[s.container, s.bg_cyan]}>
            <Text style={[s.text, s.textTitle, s.textOutline, {color: 'white'}]}>Login</Text>
            <View style={[s.element, s.width_100, s.pb_0]}>
                <TextInput
                    style={[s.input, s.p_10]}
                    placeholder="Username"
                    onChangeText={text => setUsername(text)}
                    value={username}
                />
            </View>
            <View style={[s.element, s.width_100]}>
                <TextInput
                    style={[s.input, s.p_10]}
                    placeholder="Password"
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
            </View>
            <IconButton
                icon="rocket1"
                label="Start your journey!"
                OnPress={() => navigation.goBack()}
                buttonStyle={{color: 'black'}}
                iconStyle={{backgroundColor: 'white'}}
            />
        </View>
);
}