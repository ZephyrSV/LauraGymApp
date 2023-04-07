import {s} from "../components/styles";
import {View, Text, Image} from "react-native";
import WorkoutStopWatch from "../components/WorkoutStopWatch";
import IconButton from "../components/IconButton";
import { captureRef } from 'react-native-view-shot';
import {useRef} from "react";
import * as Sharing from 'expo-sharing';

export default function DetailScreen({route, navigation}) {
    const machine = route.params.machine;
    const imageRef = useRef(null);
    const placeHolderActivityImage = require("../assets/placeHolderActivity.jpg");

    const ShareScreenShot = async () => {
        captureRef(imageRef, {
            format: "jpg",
            quality: 0.8
        }).then(
            uri => {
                Sharing.shareAsync("file://"+ uri);
            },
            error => console.error("Oops, snapshot failed", error)
        );
    }

    return (
        <View style={s.container}>
            <View ref={imageRef} style={{backgroundColor:s.container.backgroundColor}} collapsable={false}>
                <View style={s.elementRow}>
                    <Text style={[s.text, s.textTitle]}>{machine.display}</Text>
                    <View style={[s.element,{backgroundColor:"#555"}]}>
                        <Image source={machine.icon} style={{width: 100, height: 100}}/>
                    </View>
                </View>
                <WorkoutStopWatch/>
                <Image source={placeHolderActivityImage} style={{ alignSelf:"center", resizeMode:"stretch", width: 300, height: 200}}/>
            </View>
            <IconButton label={"Share"} icon={"sharealt"} OnPress={ShareScreenShot}/>
        </View>
    );
}