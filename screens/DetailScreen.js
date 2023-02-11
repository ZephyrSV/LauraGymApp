import {styles} from "../components/styles";
import {View, Text, Image, Platform} from "react-native";
import WorkoutStopWatch from "../components/WorkoutStopWatch";
import IconButton from "../components/IconButton";
import { captureRef } from 'react-native-view-shot';
import {useRef} from "react";
import * as Sharing from 'expo-sharing';

export default function DetailScreen({route, navigation}) {
    const machine = route.params.machine;
    const imageRef = useRef(null);
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
        <View style={styles.container}>
            <View ref={imageRef} style={{backgroundColor:styles.container.backgroundColor}} collapsable={false}>
                <View style={styles.elementRow}>
                    <Text style={[styles.text, styles.textTitle]}>{machine.display}</Text>
                    <View style={[styles.element,{backgroundColor:"#555"}]}>
                        <Image source={machine.icon} style={{width: 100, height: 100}}/>
                    </View>
                </View>
                <WorkoutStopWatch/>
            </View>
            <IconButton label={"Share"} icon={"sharealt"} OnPress={ShareScreenShot}/>
        </View>
    );
}