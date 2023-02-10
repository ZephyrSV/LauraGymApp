import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {styles} from "../styles";

const machines = ['Treadmill', 'Elliptical', 'Stationary Bike', 'Rowing Machine', 'Smith Machine', 'Leg Press', 'Cable Machine', 'Lat Pulldown', 'Chest Press']

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
        if (!machines.includes(data)) {
            return;
        }
        navigation.replace("Detail", {qrdata: data});
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
