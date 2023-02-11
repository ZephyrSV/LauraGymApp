import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {styles} from "../components/styles";

import {machines} from "../components/DB";

export default function QrCodeScreen({route, navigation}) {
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        // if the scanned data corresponds to the field "name" in the DB, navigate to the detail screen
        machines.forEach(machine => {
            if (machine.name === data) {
                navigation.replace("Detail", {machine: machine})
            }
        })

    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera, go to settings to change the permissions</Text>;
    }

    return (
        <View style={styles.container}>
            {<BarCodeScanner
                onBarCodeScanned={handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />}
        </View>
    );
}
