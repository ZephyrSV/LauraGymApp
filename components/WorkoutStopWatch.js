import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';

import IconButton from "./IconButton";
import {styles} from "./styles";
export default function WorkoutStopWatch() {
    const [stopWatchState, setStopWatchState] = useState(2);
    const toggleStopWatch = () => {
        setStopWatchState(stopWatchState===1 ? 2 : 1)
    }
    const resetStopWatch = () => {
        setStopWatchState(-1)
    }

    return (
        <View style={styles.elementRow}>
            <Stopwatch
                msecs={false}
                start={stopWatchState===1}
                reset={stopWatchState===-1}
                />
            <IconButton icon={stopWatchState===1 ? "pause" : "play"} label={undefined} OnPress={toggleStopWatch}/>
            <IconButton icon="reload1" label={undefined} OnPress={resetStopWatch}/>
        </View>
    )

}